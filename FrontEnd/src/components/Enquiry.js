import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-web";
import Buttons from "../utils/Buttons";

const Enquiry = () => {
  const HandelInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: Number,
  });

  const learningPlatform = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: learningPlatform.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/LearningPlatform.json"),
    });
  }, []);

  return (
    <div>
      <h1 className="text-[#0c0b1e] w-1/2 p-5 font-semibold font-mono text-center text-xl underline decoration-[#1ad179] decoration-2 underline-offset-4 ">
        Enquire Here
      </h1>

      <div className="flex">
        <section className="Form w-3/4 flex  justify-center items-center">
          <div className="flex flex-col">
            <div className="fullName w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Enter your name"
                name="fullName"
                value={user.fullName}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="email w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Enter Email Address"
                name="email"
                value={user.email}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="Phone w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Phone
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Contact Number"
                name="phone"
                value={user.phone}
                onChange={HandelInputChange}
                required
              />
            </div>
          </div>
          <div className="GradeLevel w-72 h-72 m-5">
            <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
              Describe
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani resize-y overflow-x-hidden overflow-y-auto"
              type="text"
              placeholder="Write your query here"
              required
            ></textarea>
            <div className="flex justify-center items-center mt-10">
              <Buttons text={"Send Query"} size={"xl"} />
            </div>
          </div>
        </section>
        <section className="animation w-1/2 flex justify-center items-center ">
          <div className="LearningPlatform w-full" ref={learningPlatform}></div>
        </section>
      </div>
    </div>
  );
};

export default Enquiry;
