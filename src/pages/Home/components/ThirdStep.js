import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import { Tag } from "antd";

import {getQuestionsAPI, submitAnswerAPI} from '../../../api/_api';

const ThirdStep = () => {
    const [questionsList, setQuestionsList] = useState([]);

    const setAnswer = (q, e) => {
      let items = [...questionsList];
      let item = { ...items[q] };
      item.answer = e.target.value;
      items[q] = item;
      setQuestionsList(items);
    };
  
    useEffect(() => {
      getQuestionsAPI(3).then(res => res.data).then(res => {
        console.log('res : ',res);
        setQuestionsList(res.data);
      })
    }, [])
  
    const getShapes = (num) => {
      let shapes = [];
      for (let i = 0; i < num; i++) {
        shapes.push(<img key={i} src="/images/apple.png" />);
      }
      return shapes;
    };

    const submitAnswer = () => {
        let data = {};
        submitAnswerAPI(data).then(res => res.data).then(res => {
          console.log('res : ',res);
        })
    }
  
    return (
      <div className="step-content">
        <h4>
          تعداد سوال: <Tag color="default">{questionsList.length}</Tag>
        </h4>
  
        <div className="q-list">
        {questionsList.map((item, index) => (
          <div key={index} className="q-item">
            <div className="row">
              <span className="num">{index + 1}- </span>
              <p className="text">{item.body}</p>
            </div>
            <div className="shapes">
              {getShapes(item.value).map((item) => item)}
            </div>
            <div className="row choices">
              <Radio.Group
                onChange={(e) => setAnswer(index, e)}
                value={item.answer}
              >
                {item.options.map((option, i) => (
                  <div className="choice-item" key={i}>
                    <Radio value={option.id}>{option.value}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  

export default ThirdStep;