import { question_answer } from "../utils/FAQ_qa";
import Q_A_Component from "./Q_A_Components";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const FAQ = () => {
  const questionMarks = useRef(null);
  const Technical_question_faq = useRef(null);
  const General_faq = useRef(null);
  const Learning_and_logistics_faq = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: questionMarks.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Question_mark_FAQ.json"),
    });
    Lottie.loadAnimation({
      container: Technical_question_faq.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Technical_question_faq.json"),
    });
    Lottie.loadAnimation({
      container: General_faq.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/General_faq.json"),
    });
    Lottie.loadAnimation({
      container: Learning_and_logistics_faq.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Learning_and_logistics_faq.json"),
    });
  });

  return (
    <div>
      <div className="FAQs flex flex-col justify-center items-center w-full bg-[#0c0b1e]">
        <section className="generally_asked_questions bg-[#0c0b1e] border-2 border-[#1ad179] rounded-xl m-2 w-1/2">
          <div className="text-[#1ad179] flex justify-between p-10 items-center">
            <div>
              <h1 className="flex items-center text-3xl w-full">
                Generally Asked Questions
              </h1>
            </div>
            <div className="mr-10 p-5 w-1/4" ref={General_faq}></div>
          </div>
          <div className="">
            <Q_A_Component
              question={question_answer[0].question}
              answer={question_answer[0].answer}
            />
            <Q_A_Component
              question={question_answer[1].question}
              answer={question_answer[1].answer}
            />
            <Q_A_Component
              question={question_answer[2].question}
              answer={question_answer[2].answer}
            />
          </div>
        </section>
        <section className="technically_asked_questions bg-[#0c0b1e] border-2 border-[#1ad179] rounded-xl m-2 w-1/2">
          <div className="text-[#1ad179] flex justify-between p-10 items-center">
            <div className="ml-10 p-5 w-1/2" ref={Technical_question_faq}></div>
            <div>
              <h1 className="flex items-center text-3xl w-full">
                Technically Asked Questions
              </h1>
            </div>
          </div>
          <div className="">
            <Q_A_Component
              question={question_answer[3].question}
              answer={question_answer[3].answer}
            />
            <Q_A_Component
              question={question_answer[4].question}
              answer={question_answer[4].answer}
            />
            <Q_A_Component
              question={question_answer[5].question}
              answer={question_answer[5].answer}
            />
          </div>
        </section>
        <section className="Learning_and_Logistics bg-[#0c0b1e] border-2 border-[#1ad179] rounded-xl m-2 w-1/2">
          <div className="text-[#1ad179] flex justify-between p-10 items-center">
            <div>
              <h1 className="flex items-center text-3xl w-full">
                Learning and Logistics
              </h1>
            </div>
            <div
              className="mr-10 p-5 w-1/2 "
              ref={Learning_and_logistics_faq}
            ></div>
          </div>
          <div className="">
            <Q_A_Component
              question={question_answer[6].question}
              answer={question_answer[6].answer}
            />
            <Q_A_Component
              question={question_answer[7].question}
              answer={question_answer[7].answer}
            />
            <Q_A_Component
              question={question_answer[8].question}
              answer={question_answer[8].answer}
            />
          </div>
        </section>
        <section className="Choosing_an_online_teacher bg-[#0c0b1e] border-2 border-[#1ad179] rounded-xl m-2 w-1/2">
          <div className="text-[#1ad179] flex justify-between p-10 items-center">
            <div className="ml-10 p-5 w-2/5" ref={questionMarks}></div>
            <div>
              <h1 className="flex items-center text-3xl w-full">
                Choosing an Online Teacher
              </h1>
            </div>
          </div>
          <div className="">
            <Q_A_Component
              question={question_answer[9].question}
              answer={question_answer[9].answer}
            />
            <Q_A_Component
              question={question_answer[10].question}
              answer={question_answer[10].answer}
            />
            <Q_A_Component
              question={question_answer[11].question}
              answer={question_answer[11].answer}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default FAQ;
