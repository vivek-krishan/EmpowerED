import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import Buttons from "../utils/Buttons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const whiteBoard = useRef(null);
  const videoChat = useRef(null);
  const chatting = useRef(null);
  const learningPlatform = useRef(null);
  const landingAnimation = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    Lottie.loadAnimation({
      container: whiteBoard.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/WhiteBoardAnimatedSVG.json"),
    });
    Lottie.loadAnimation({
      container: videoChat.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/VideoChatAnimationSVG.json"),
    });
    Lottie.loadAnimation({
      container: learningPlatform.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/LearningPlatform.json"),
    });
    Lottie.loadAnimation({
      container: chatting.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/ChattingAnimationSVG.json"),
    });
    Lottie.loadAnimation({
      container: landingAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/LandingAnimationSVG.json"),
    });
  }, []);

  const scrollToTeachers = () => {
    navigate("/teacher");
  };

  return (
    <div className="Home w-full h-fit  ">
      <div className="Home_Details h-[80vh] bg-[#0c0b1e] rounded-bl-[100px] border border-[#0c0b1e] w-full flex ">
        <section className="Text h-[50vh] ml-36 mt-16 w-[60%]">
          <h1 className="text-5xl left-1/2 font-semibold text-[#1ad179]">
            EmpowerED..
          </h1>
          <p className="font-extralight text-2xl w-3/4 my-16 top-4 ">
            Traditionally, education has revolved around physical classrooms,
            textbooks, and face-to-face interactions. However, the digital age
            has ushered in a new era of learning, with online tuition emerging
            as a powerful force.
          </p>
          <div className="flex justify-evenly w-3/4  top-8">
            <div>
              <Link
                to={"/class"}
                className={`text-black bg-gray-100 w-full h-10 m-4 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium`}
              >
                Connect To Classroom
              </Link>
            </div>
            <div className="ScrollToTeachersPage text-white flex justify-center">
              <Buttons text={"Connect to Teachers"} toCall={scrollToTeachers} />
            </div>
            <div>
              <Link
                to={"/register"}
                className={`text-black bg-gray-100 w-full h-10 m-4 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium`}
              >
                View our Blogs
              </Link>
            </div>

            {/* <div>
              <Buttons text={"Guest"} size={"xl"} />
            </div> */}
          </div>
        </section>
        <section
          className="Img flex items-center justify-center top-56 w-[40%] mr-10"
          ref={landingAnimation}
        >
          {/* <img src={images[13].url} alt="Illustration" className="w-full " /> */}
        </section>
      </div>

      <div className="Motivational_text text-black flex justify-evenly items-center">
        <div className=" flex flex-col items-center m-5">
          <h3 className="bg-blue-100 font-semibold text-right w-full px-4 py-2 rounded-xl">
            __Never stop learning
          </h3>
          <h1 className="text-[80px] font-bold w-[50vw] mt-0 m-10 ">
            Grow up your skills by online courses with EmpowerED
          </h1>
        </div>
        <div className="LearningPlatform w-1/2" ref={learningPlatform}></div>
      </div>

      <div className="Animated_Description text-black">
        <div className="WhiteBoard w-full h-[90vh] flex items-center mt-5 p-10 ">
          <section className="Animation w-1/2" ref={whiteBoard}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">
              Digital White Board Facility..
            </h2>
            <p className="text-lg font-extralight m-5">
              An online whiteboard is a digital version of the classic
              whiteboard you might find in a classroom or meeting room. It
              provides a virtual space where you can collaborate with others in
              real-time over the internet.<br></br> <br></br>Here's what we can
              do -
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Brainstorm ideas visually using sticky notes, text boxes, and
              drawings.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Create mind maps and flowcharts.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Sketch out designs and prototypes.
            </p>
            <p className="border rounded-3xl m-5 p-3 ">
              Take notes and annotate documents.
            </p>
          </section>
        </div>
        <div className="VideoChat w-full h-[90vh] flex items-center p-10">
          <section className="Description w-1/2 m-5">
            <h2 className="text-3xl text-center font-bold ">Live Video Chat</h2>
            <p className="text-lg font-extralight pt-10  text-center">
              Online live video chat for study is a way to connect with other
              students virtually in real-time for a more focused and social
              study experience.<br></br>A Face-to-Face interaction between
              teachers and students is the essential part of education.
            </p>
          </section>
          <section className="Animation w-1/2 " ref={videoChat}></section>
        </div>
        <div className="Chatting w-full h-[90vh] flex justify-evenly items-center p-10 ">
          <section className="Animation w-1/3" ref={chatting}></section>
          <section className="Description w-1/2">
            <h2 className="text-3xl text-center font-bold">Live Text Chat</h2>
            <p className="text-lg font-extralight pt-10  text-center">
              Live chat feature allows participants to send text messages and
              links to other participants during a video call. Chat messages are
              visible to everyone in the call, and can be used to communicate
              with other participants without interrupting the call.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
