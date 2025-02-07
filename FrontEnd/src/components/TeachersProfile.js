import Buttons from "../utils/Buttons";
import { ListOfQuailification } from "../utils/ListOfQualification";
import { images } from "../utils/image";
import { useState } from "react";
import VideoPopUp from "./VideoPop";
import { Play } from "lucide-react";

const TeachersProfile = () => {
  const [showVideoPopUp, setShowVideoPopUp] = useState(false);

  const DetailDisplay = ({ LeftText, RightText }) => {
    return (
      <div className="w-full flex justify-evenly m-2 ">
        <h1 className="w-1/3 text-wrap text-lg p-1 bg-blue-50 rounded-xl ">
          {LeftText}
        </h1>
        <h1 className="w-1/2 text-wrap font-extralight p-1 bg-blue-50 rounded-xl">
          {RightText}
        </h1>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#f7f9fb]">
        <div className="Image_And_Bio bg-[#f7f9fb] flex justify-center items-center">
          <section className="Title_And_Bio w-1/2 text-black  flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center m-6">Educator's name</h1>
            <p className="Sort_Bio w-2/3">
              Highly motivated and results-oriented web developer with X
              years of experience building.
            </p>
            <Buttons text={"Connect"} />
          </section>
          <section className=" w-1/2 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full m-10 flex overflow-hidden drop-shadow-lg hover:drop-shadow-2xl ">
              <img
                src={images[8].url}
                alt=""
                className="hover:scale-110 transition duration-150"
              />
            </div>
          </section>
        </div>
        <section className="Quailification m-auto text-black p-4 w-2/3 rounded-2xl bg-white">
          <h1 className="text-3xl font-semibold text-center">About Mentor</h1>
          <div className="AllDetails w-full flex flex-col  justify-evenly">
            <div>
              {ListOfQuailification.map((item) => {
                return (
                  <DetailDisplay
                    key={item.id}
                    LeftText={item.section}
                    RightText={item.answer}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="Demo_Section text-black flex justify-evenly items-center">
          <div className="w-1/2 ">
            <button
              className="w-full relative aspect-video overflow-hidden flex justify-center items-center rounded-[50px] drop-shadow-lg hover:scale-105 hover:drop-shadow-2xl transition duration-200 ease-in-out"
              onClick={() => setShowVideoPopUp(true)}
            >
              <img src={images[6].url} alt="" className="w-full" />
              <div className="absolute top-1/2 left-1/2 flex justify-center items-center ">
                <Play size={30} color="white" />
              </div>
            </button>

            <h1 className="text-center text-lg font-semibold font-serif m-2 ">
              Get A personal touch from mentor
            </h1>
          </div>

          {showVideoPopUp && (
            <VideoPopUp onClose={() => setShowVideoPopUp(false)} />
          )}

          <div className="ScriptOfIntro w-1/3">
            <p>
              I am Vivek krishan, a full stack web developer. I am creating
              website for a online tution named as " EmpowerED" where any
              student can register and start learning/ taking tution to their
              prefered subject. Teachers can be paid on monthly basis. Students
              can take 2 damo classes from the teacher and than decide to join
              the class or not. I will also provide the live video calling
              feactures along with live white board for better understanding of
              students. I am using React and tailwind for the UI/ frontend and
              MongoDB and express for the backend. Write me a summery for
              LinkedIn for this project. Mention all the details I have been
              adding to this project along with technologies I have been using
              to this project.
            </p>
          </div>
        </section>

        <div className=" flex justify-center items-center ">
          <Buttons text={"Connect"} />
        </div>
      </div>
    </div>
  );
};

export default TeachersProfile;
