import Images from "../../assets/Images";
import { Questions } from "./Faq";
import React from "react";

import "./Faq.css";

export default ({ question }: any) => {
  const answer = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div
      ref={answer}
      onClick={() => {
        answer.current.classList.toggle("display-answer");
      }}
      className="faq-question-container"
    >
      <div className="question">
        <h4 style={{ fontWeight: 500 }}>{question.question}</h4>
        <img style={{ width: 12.5 }} src={Images.arrow} alt="" />
      </div>
      <h5
        className="answer"
        style={{ fontWeight: 500, marginLeft: 5, opacity: 0.5 }}
      >
        {question.answer}
      </h5>
    </div>
  );
};
