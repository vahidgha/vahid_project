import React, { useState, useEffect } from "react";
import { Radio, Button, Tag, message } from "antd";

import {getQuestionsAPI, submitAnswerAPI} from '../../../../api/_api';

const ShowNumStep = ({step,next,prev}) => {

    const [questionsList, setQuestionsList] = useState([]);

    useEffect(() => {
      console.log('step : ',step);
      getQuestionsAPI(step).then(res => res.data).then(res => {
        console.log('res : ',res);
        setQuestionsList(res.data);
      }).catch(err => {
        console.error(err);
      })
    }, [step])
    
    const getShapes = (num) => {
      let shapes = [];
      let yekan = num % 10;
      let dahgan = Math.floor(num / 10);
      for (let i = 0; i < yekan; i++) {
        shapes.push(<img key={i} style={{width:'15px'}} src="/images/apple.png" />);
      }
      for (let i = 0; i < dahgan; i++) {
        shapes.push(<img key={i} style={{width:'50px'}} src="/images/dahta.png" />);
      }
      return shapes;
    };
  
    const setAnswer = (q, e) => {
      let items = [...questionsList];
      let item = { ...items[q] };
      item.answer = e.target.value;
      items[q] = item;
      setQuestionsList(items);
    };
  
    const submitAnswer = () => {
      let answerList = questionsList.map(item => {return {id:item.id,answer:item.answer || null}});
      console.log('answerList : ',answerList);
      if ( answerList.filter(item => item.answer === undefined).length === 0 ) {
        let data = {
          questions:answerList
        }
        submitAnswerAPI(data).then(res => res.data).then(res => {
          console.log('res : ',res);
          if (res.status === "fail") {
            message.error(res.message);
          }else{
            next();
            message.success(res.message);
          }
        })
      }else {
        message.error('برای ثبت پاسخ ها باید به تمامی سوالات پاسخ داده باشید.');
      }
      return
      
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
                      <Radio value={option.value}>{option.value}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </div>
          ))}
        </div>
        <div className="actions-row">
            {step > 1 && 
              <Button style={{marginLeft:'5px'}} onClick={() => prev()}>
                بازگشت به سطح قبل
              </Button>
            }
            <Button type="primary" onClick={() => submitAnswer()}>
              ثبت پاسخ ها
            </Button>
        </div>
      </div>
    );
  };
export default ShowNumStep;