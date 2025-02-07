import { useSelector } from "react-redux";
import { achivements } from "../utils/Achivements";
import { TestimonialStack } from "../utils/Testimonial-card-stack";
import { Link } from "react-router-dom";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const StudentProfile = () => {
  // Constants
  const studentDetails = useSelector((store) => store.user.userDetails);

  console.log(studentDetails);

  const DetailDisplay = ({ LeftText, RightText }) => {
    return (
      <div className="w-full flex justify-evenly m-2 text-black">
        <h1 className="w-1/3 text-wrap text-lg p-1 rounded-xl ">{LeftText}</h1>
        <h1 className="w-1/2 text-wrap font-light p-1 pl-5 border-b-2 border-[#1ad179]">
          {RightText}
        </h1>
      </div>
    );
  };

  const recentClassesCard = () => {
    return (
      <div className="flex items-center">
        <div className=" w-24 h-24 m-4 drop-shadow-xl rounded-full overflow-hidden border">
          <img
            src="https://res.cloudinary.com/dur4pixxs/image/upload/f_auto,q_auto/reezm4lyzhvivmocqowj"
            alt="DP"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="ml-10">
          <h1 className="text-xl">Vivek Krishan</h1>
          <h3 className="text-lg text-gray-500">Subjects</h3>
        </div>
      </div>
    );
  };

    const Learning_and_logistics_faq = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: Learning_and_logistics_faq.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Learning_and_logistics_faq.json"),
    });
  });

  return studentDetails.length === 1 ? (
    <div>
      <div className="Details flex flex-wrap text-black pb-20">
        {/*--------------- First Card ------------- */}
        <section className="ShortCard w-1/4 mt-10 ml-24 text-white  bg-[#0c0b1e] border-2 rounded-2xl drop-shadow-xl  flex flex-col justify-center items-center hover:scale-[1.02] hover:drop-shadow-2xl transition duration-300 ease-in-out">
          <div className="DP w-40 h-40 rounded-full m-4 flex overflow-hidden ">
            <img src={studentDetails[0].avatar} alt="" className="w-full" />
          </div>

          <div className="m-2 mb-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-2 pt-5 font-semibold tracking-wide border-t-2 border-[#1ad179]">
              {studentDetails[0].fullName}
            </h1>
            <h3 className="font-extralight tracking-wider ">
              {studentDetails[0].currentStatus}
            </h3>
          </div>
        </section>

        {/*--------------- Second Card ------------- */}
        <section className="All_Details w-3/5 h-fit m-10 ml-16 p-10 bg-white rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out  border-2 border-[#0c0b1e] ">
          <div className="w-full">
            <DetailDisplay
              LeftText={"Full Name :"}
              RightText={studentDetails[0].fullName}
            />
            <DetailDisplay
              LeftText={"Email :"}
              RightText={studentDetails[0].email}
            />
            <DetailDisplay
              LeftText={"Phone :"}
              RightText={studentDetails[0].phone}
            />
            <DetailDisplay
              LeftText={"Interests :"}
              RightText={"Coding and Developement"}
            />
            <DetailDisplay
              LeftText={"Grade Level :"}
              RightText={studentDetails[0].gradeLevel}
            />
            <DetailDisplay
              LeftText={"Learning Style :"}
              RightText={studentDetails[0].learningStyle}
            />
            <DetailDisplay LeftText={"Rating :"} RightText={"4.5 / 5 stars"} />
            <DetailDisplay
              LeftText={"Preferred Class time :"}
              RightText={`${studentDetails[0].preferredClassTime.startTime} - ${studentDetails[0].preferredClassTime.endTime}`}
            />
          </div>
        </section>

        {/*--------------- Third Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 my-10 mx-36 p-8 rounded-2xl bg-white drop-shadow-xl hover:drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out border-2 border-[#0c0b1e] ">
          <h1 className=" text-lg text-center border-b-2 mb-5 font-medium">
            All Achivements
          </h1>
          <div>
            {achivements.map((item) => {
              return (
                <DetailDisplay
                  LeftText={item.field}
                  RightText={item.achivement}
                />
              );
            })}
          </div>
        </section>

        {/*--------------- Fouth Card ------------- */}
        <section className="Achivements_And_Goals w-1/3 p-5 my-10 mx-20 h-fit text-white rounded-2xl bg-[#0c0b1e] drop-shadow-xl hover:drop-shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out border-2 ">
          <h1 className=" text-lg text-center p-2 font-medium border-b-2 border-[#1ad179]">
            Recent Teachers
          </h1>
          {/* <div>{recentClassesCard()}</div> */}
          <div>
            Not connected
          </div>
        </section>

        {/*--------------- Fifth Card ------------- */}
        <section className="Testimonial h-80 w-1/2 p-10 mx-96">
          <h1 className=" text-xl font-semibold mb-14 text-center border-b-2">
            Mentors Feedback
          </h1>
          <TestimonialStack />
        </section>
      </div>
    </div>
  ) : (
    <div className="bg-[#0c0b1e]">
      {/* <h1 className="text-black">data not found</h1> */}
      <div className="flex w-full">
        <section className="login_or_register text-black flex flex-col w-1/2  items-center justify-center ">
          <h1 className="w-full text-center text-5xl font-medium p-5 text-[#1ad179] ">
            You are not Logged in
          </h1>
          <h1 className="w-full text-center text-xl font-light p-5 text-white ">
            Kindly Login Or Register to view your Profile.
          </h1>
          <div className="w-full flex items-center justify-evenly p-5 ">
            <Link
              to={"/login"}
              className="text-white hover:text-black font-semibold text-xl text-center w-1/5 border-2 border-[#4299EA] hover:border-[#1ad179]  p-3 rounded-2xl hover:bg-[#1ad179] duration-150 ease-in-out drop-shadow-2xl hover:scale-110 "
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="text-white hover:text-black font-semibold text-xl text-center w-1/5 border-2 border-[#4299EA] hover:border-[#1ad179] p-3 rounded-2xl hover:bg-[#1ad179] duration-150 ease-in-out drop-shadow-2xl hover:scale-110 "
            >
              Register
            </Link>
          </div>
        </section>
        <section className="image flex w-1/2 justify-center items-center">
          <div
            className="w-3/4 flex justify-center items-center"
            ref={Learning_and_logistics_faq}
          ></div>
          {/* <img src={images[13].url} className="w-1/2" /> */}
        </section>
      </div>
    </div>
  );
};

export default StudentProfile;
