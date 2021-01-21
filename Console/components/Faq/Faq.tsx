import React from "react";
import Images from "../../assets/Images";
import QuestionComponent from "./QuestionComponent";

export default () => {
  var questions: Questions[] = [
    new Questions(
      "How to exit KeyOS ?",
      `To exit KeyOS tap and hold anywhere in home screen to bring up a submenu then click exit and enter your password in password prompt.
       If you are in single app mode press home button or try to launch home screen for more than 5 times this will bring a password prompt`
    ),
    new Questions(
      "How to block websites ?",
      `KeyOS allow you to create a whitelist or blacklist for a websites. 
    if you are in whitelist mode then the websites save under whitelist only able to access by the browser and
    if you are in blacklist mode then the websites save under blacklist wont't be access by the browser `
    ),
    new Questions(
      "How to block whatsapp settings page ?",
      `In order to block whatsapp settings page go to app section then find whatsapp and click edit icon this will navigate you to edit app page.
      in that page click "Block Activites" then type "settings" in search bar then select the filtered items and click done. this will block the whatsapp
      settings page`
    ),
    new Questions(
      "How to set time limit for an app ?",
      `To set a time limit for an app go to app section then search for the required app and click edit app icon this will navigate you to edit app page 
      there you can find a option to set time limit, hide icon and block pages
      `
    ),
  ];

  return (
    <div className="faq">
      <div className="faq-heading">
        <h1>Frequently Asked Questions</h1>
        <h4>
          Still have questions?{" "}
          <a href="mailto:keyOS.DevAsh@gmail.com?subject=KeyOS Query&body = Message">
            Contact us
          </a>
        </h4>
      </div>

      <div className="questions-containers">
        {questions.map((item, index, _) => {
          return <QuestionComponent question={item} />;
        })}
      </div>
    </div>
  );
};

export class Questions {
  constructor(question: String, answer: String) {
    this.question = question;
    this.answer = answer;
  }

  question: String = "";
  answer: String = "";
}
