import { ThreeDCard } from "../utils/ThreeDCard";
import { images } from "../utils/image";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const navigate = useNavigate();

  // Utility functions
  const mentorProfile = () => {
    navigate("/teacher-profile/123");
  };

  return (
    <div className="bg-[#f7f9fb] ">
      <div className="BannerDiv h-40 m-16 mt-10 bg-[#1ad178] rounded-3xl flex justify-evenly items-center">
        <section>
          <h1 className="ml-5 font-extralight text-white ">
            Home | Our Mentors
          </h1>
          <h1 className="ml-5 text-2xl font-semibold text-white mb-0 m-5 ">
            EmpowerED has the best qualified
          </h1>
          <h1 className="ml-5 text-2xl font-semibold text-white ">
            Mentors ..
          </h1>
        </section>
        <section>
          <img src={images[2].url} alt="img" className="w-52" />
        </section>
      </div>
      <div className="flex flex-wrap justify-evenly m-10 mb-0">
        <ThreeDCard
          callTo={mentorProfile}
          name={"Abhishekh Panday"}
          shortBio={
            "Teaching is the Profession of brighting up the future of our country and I want to contribute to it."
          }
          experience={"10"}
          quailification={"PhD in Engineering"}
          preferdTiming={"3-6 pm"}
        />
        <ThreeDCard
          callTo={mentorProfile}
          name={"Samistha Roy"}
          shortBio={
            "Love to teach and educate children"
          }
          quailification={"PhD in Engineering"}
          experience={"7"}
          preferdTiming={"5-10pm"}
        />
        <ThreeDCard
          callTo={mentorProfile}
          name={"Ritu Sri"}
          shortBio={
            "Teaching is nobel profession and I am also a part of it"
          }
          experience={"11"}
          quailification={"PhD in Engineering"}
          preferdTiming={"6-9 pm"}
        />
        <ThreeDCard
          callTo={mentorProfile}
          name={"Abhishekh Panday"}
          shortBio={
            "Teaching is the Profession of brighting up the future of our country and I want to contribute to it."
          }
          experience={"10"}
          quailification={"PhD in Engineering"}
          preferdTiming={"3-6 pm"}
        />
        <ThreeDCard
          callTo={mentorProfile}
          name={"Abhishekh Panday"}
          shortBio={
            "Teaching is the Profession of brighting up the future of our country and I want to contribute to it."
          }
          experience={"10"}
          quailification={"PhD in Engineering"}
          preferdTiming={"3-6 pm"}
        />
        <ThreeDCard
          callTo={mentorProfile}
          name={"Abhishekh Panday"}
          shortBio={
            "Teaching is the Profession of brighting up the future of our country and I want to contribute to it."
          }
          experience={"10"}
          quailification={"PhD in Engineering"}
          preferdTiming={"3-6 pm"}
        />
      </div>
      {/* <Buttons text={"testing"} toCall={testing}/> */}
    </div>
  );
};

export default Teachers;
