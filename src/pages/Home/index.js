import {useState } from "react";
import { Steps } from "antd";

import './style.less';
import ShowNumStep from "./components/ShowNumStep/ShowNumStep";

import CalculateStep from "./components/CalculateStep/CalculateStep";

const { Step } = Steps;


const Home = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "سطح اول",
      description: "اعداد یک رقمی",
      content: <ShowNumStep step={1} next={next} prev={prev} />
    },
    {
      title: "سطح دوم",
      description: "اقداد دو رقمی",
      content: <ShowNumStep step={2} next={next} prev={prev} />
    },
    {
      title: "سطح سوم",
      description: "محاسبات جمع و تفریق یک رقمی",
      content: <CalculateStep step={3} next={next} prev={prev} />
    },
    {
      title: "سطح چارم",
      description: "ضربهای ساده یک رقمی",
      content: <CalculateStep step={4} next={next} prev={prev} />
    },
  ];

  return (
    <div className="container">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} description={item.description} />
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].content}
      </div>
    </div>
  );
};

export default Home;
