import { Link, useNavigate } from "react-router-dom";
import { images } from "../utils/image";
import { useState } from "react";
import { ChevronDown, MousePointerClick } from "lucide-react";
import { alertSuccess, alertError } from "../utils/Alert";

const TeacherRegisterPage = () => {
  // All Variables declaration for this components
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [introVideo, setIntroVideo] = useState(null);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    currentQualification: "",
    isEmployed: "",
    startTime: "",
    endTime: "",
    bio: "",
    fees: Number,
    age: Number,
    phone: Number,
    passkey: "",
    avatar: null,
  });

  // All function defination
  const NavigateToLogIn = () => {
    navigate("/login");
  };

  const HandelInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const HandelImage = (event) => {
    console.log(event.target.files);
    setAvatar(event.target.files[0]);
    console.log(avatar);
  };

  const HandelVideo = (event) => {
    console.log(event.target.files);
    setIntroVideo(event.target.files[0]);
    console.log(avatar);
  };

  function createFormData(user, avatar, introVideo) {
    const formData = new FormData();

    // Add user data as key-value pairs
    for (const [key, value] of Object.entries(user)) {
      // Handle potential undefined values within user object
      if (value !== undefined) {
        console.log(key, value);
        formData.append(key, value);
      } else {
        console.warn(
          `Skipping key "${key}" in user object due to undefined value.`
        );
      }
    }

    // Add avatar as a file object (with error handling)
    if (avatar) {
      if (!avatar.type.match("image/*")) {
        console.error("Invalid file type. Please select an image.");
        return null; // Return null to indicate an error (optional)
      }
      formData.append("avatar", avatar);
    }
    if (introVideo) {
      if (!introVideo.type.match("video/*")) {
        console.error("Invalid file type. Please select an video.");
        return null; // Return null to indicate an error (optional)
      }
      formData.append("introVideo", introVideo);
    }
    // console.log(formData);
    return formData;
  }

  const Register = async () => {
    try {
      const formdata = await createFormData(user, avatar, introVideo);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      await fetch(
        "http://localhost:3000/api/v1/teacher/register",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alertSuccess(result.message);
        })
        .catch((error) => {
          console.error(error);
          alertError(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-black flex bg-[#f7f9fb]">
        <section className="Illustration_side w-1/4 m-10 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-center">EmpowerED</h1>
            <h1 className="text-4xl text-center font-bold w-full ">
              Welcome to EmpowerED Online Learning Platform
            </h1>
          </div>
          <div className=" flex justify-center m-5 ">
            <img src={images[3].url} alt="student" className="w-full" />
          </div>
        </section>
        <section className="Form_side w-3/4 p-10">
          <div className="Google_signIn w-full flex justify-around items-center">
            <h3 className="font-medium text-center w-72 border border-gray-400 py-5 rounded-lg bg-white hover:bg-[#1ad179] hover:drop-shadow-xl transition duration-150 ease-in-out cursor-pointer">
              Register with google
            </h3>
            <Link
              to={"/register"}
              className="text-center text-lg flex justify-center items-center border-2 p-4 rounded-xl border-[#1ad179] hover:bg-[#1ad179] duration-200 ease-in-out hover:drop-shadow-xl"
            >
              Click here to Register as Student{" "}
              <MousePointerClick className="m-2" />{" "}
            </Link>
          </div>
          <section className="flex justify-center items-center">
            <h1 className="text-center m-5 text-lg flex justify-center items-center border-b-2 border-[#1ad179]">
              Register as Teacher{" "}
              <ChevronDown className="m-5 animate-bounce text-[#1ad179]" />{" "}
            </h1>
          </section>

          <form className="Form flex flex-wrap justify-center">
            <div className="UserName w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                User name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="UserName"
                name="username"
                value={user.username}
                onChange={HandelInputChange}
                required
              />
            </div>
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
            <div className="age w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Age
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Current Age"
                name="age"
                value={user.age}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="CurrentQualification w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Current Qualification Level
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                name="currentQualification"
                onChange={HandelInputChange}
              >
                <option value={""}>Select</option>
                <option value={"Matriculation"}>Matriculation</option>
                <option value={"Intermediate"}>Intermediate</option>
                <option value={"Graduate"}>Graduate</option>
                <option value={"Bachelor's"}>Bachelor's</option>
                <option value={"Master's"}>Master's</option>
                {/* <option value={"International Baccalaureate"}>
                  International Baccalaureate
                </option> */}
              </select>
            </div>
            <div className="isEmployed w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Employed / Unemployed
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                name="isEmployed"
                onChange={HandelInputChange}
              >
                <option value={""}>Select</option>
                <option value={"Employed"}>Employed</option>
                <option value={"Unemployed"}>Unemployed</option>
              </select>
            </div>
            <div className="Bio w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Bio
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani resize-y overflow-x-hidden overflow-y-auto"
                type="text"
                placeholder="About Yourself"
                name="bio"
                value={user.bio}
                onChange={HandelInputChange}
                required
              ></textarea>
            </div>
            <div className="Fees w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Fee Expectations
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                name="fees"
                value={user.fees}
                onChange={HandelInputChange}
              >
                <option value={""}>Select</option>
                <option value={"1000"}>Upto 1000</option>
                <option value={"2000"}>Upto 2000</option>
                <option value={"3000"}>Upto 3000</option>
                <option value={"4000"}>Upto 4000</option>
                <option value={"5000"}>Upto 5000</option>
                <option value={"6000"}>Upto 6000</option>
                <option value={"7000"}>Upto 7000</option>
              </select>
            </div>
            <div className="password w-72 m-5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher"
              >
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                placeholder="Password (min. 8 characters)"
                name="passkey"
                value={user.passkey}
                onChange={HandelInputChange}
                required
              />
            </div>
            <div className="ImageInput w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Choose Introduction Video
              </label>
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                accept="video/*"
                placeholder="Introduction Video"
                name="introVideo"
                onChange={HandelVideo}
                required
              />
            </div>
            <div className="ImageInput w-72 m-5">
              <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                Choose Profile Pic
              </label>
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                accept="image/*"
                placeholder="Upload your profile picture"
                name="avatar"
                onChange={HandelImage}
                required
              />
            </div>
            <h1 className="text-lg text-center font-semibold w-full">
              Preferred Teaching Timing
            </h1>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="StartingTime w-72 m-5">
                  <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                    Starting Time
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                    placeholder="Preferred Teaching Time from"
                    name="startTime"
                    value={user.startTime}
                    onChange={HandelInputChange}
                    required
                  />
                </div>
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"}>am</option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
              <div className=" w-full flex ">
                <h1 className="w-full">To</h1>
              </div>
              <div className="relative">
                <div className="EndTiming w-72 m-5">
                  <label className="block mb-2 text-lg font-semibold w-fit text-gray-900 dark:text-black font-Philosopher">
                    End Timing
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
                    placeholder="Preferred Teaching Time Till"
                    name="endTime"
                    value={user.endTime}
                    onChange={HandelInputChange}
                    required
                  />
                </div>
                <select className="h-fit w-fit rounded-md absolute top-16 right-6 bg-[#f7f9fb]">
                  <option value={"am"} className="text-red-400">
                    am
                  </option>
                  <option value={"pm"}>pm</option>
                </select>
              </div>
            </div>
          </form>

          <div className="Terms&Condition flex justify-center">
            <input type="checkbox" id="agree" className="m-2" />
            <h3 className="text-center">
              I agreed to the terms & conditions /{" "}
            </h3>
            <Link
              to={"/termsandconditions"}
              className="text-center text-blue-500 "
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="RegisterButton flex justify-center">
            <button
              className="bg-white border hover:bg-[#1ad179] w-72 mx-5 my-3 py-2 text-black text-lg rounded-2xl ease-in-out duration-200 hover:scale-110"
              onClick={Register}
            >
              Register
            </button>
          </div>
          <div className="Sign_UP_Options">
            <h3 className="text-center">
              Already have an account ?{" "}
              <button className="text-blue-400" onClick={NavigateToLogIn}>
                Log In
              </button>{" "}
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeacherRegisterPage;
