import { useRef, useState } from "react";
import { images } from "../utils/image";
import ConnectMemberCard from "./ConnectedMemberCard";
import Chats from "./Chats";
import InputBox from "./InputBox";
import Canvas from "./whiteBoard/Canvas/index";

const Class = () => {
  // All State Variables
  const [textAreaContent, setTextAreaContent] = useState("");
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#FFFFFF");
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  // refrences
  const canvasRef = useRef(null); // canvas refrence for drawing lines on canvas
  const ctxRef = useRef(null); // context refrence for undo/ redo

  // All Utility Functions
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check for .txt extension
      if (!file.name.toLowerCase().endsWith(".txt")) {
        alert("Please select a .txt file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setTextAreaContent(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handelClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect = "white";
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setElements([]);
  };

  const Undo = () => {
    setHistory((prevHis) => [...prevHis, elements[elements.length - 1]]);

    if (elements.length === 1) setElements([]);

    setElements((prevElement) => prevElement.slice(0, prevElement.length - 1));
  };

  const Redo = () => {
    setElements((prevElement) => [...prevElement, history[history.length - 1]]);
    setHistory((prevHis) => prevHis.slice(0, prevHis.length - 1));
  };

  return (
    <>
      <div className="text-white bg-gray-800">
        <div className="Heading flex justify-between p-5">
          <h1 className="text-3xl mx-10 text-center">Class Room</h1>
          <div className="Controlls flex ">
            <div className="Tools mx-10 flex gap-3">
              <div className="pencil">
                <input
                  type="radio"
                  name="tool"
                  id="pencil"
                  value="pencil"
                  checked={tool === "pencil"}
                  className="mx-1 "
                  onChange={(e) => setTool(e.target.value)}
                ></input>
                <label htmlFor="pencil" className=" py-2">
                  pencil
                </label>
              </div>
              <div className="line">
                <input
                  type="radio"
                  name="tool"
                  id="line"
                  value="line"
                  checked={tool === "line"}
                  className="mx-1"
                  onChange={(e) => setTool(e.target.value)}
                ></input>
                <label htmlFor="line" className=" py-2">
                  line
                </label>
              </div>
              <div className="rectangle">
                <input
                  type="radio"
                  name="tool"
                  id="rectangle"
                  value="rectangle"
                  checked={tool === "rectangle"}
                  className="mx-1"
                  onChange={(e) => setTool(e.target.value)}
                ></input>
                <label htmlFor="rectangle" className=" py-2">
                  rectangle
                </label>
              </div>
            </div>
            <div className="Color mx-5">
              <label htmlFor="color">Color</label>
              <input
                type="color"
                id="color"
                className="mx-2 rounded-lg"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="Undo/Redo mx-5">
              <button
                className="bg-white px-2 py-1 rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl"
                disabled={elements.length === 0}
                onClick={() => Undo()}
              >
                Undo
              </button>
              <button
                className="bg-white px-2 py-1 rounded-xl mx-2 text-black drop-shadow-xl hover:bg-green-500 hover:text-white hover:scale-105 transition duration-100 hover:drop-shadow-2xl"
                disabled={history.length < 1}
                onClick={() => Redo()}
              >
                Redo
              </button>
            </div>
            <div className="ClearCanvas mx-5">
              <button
                className="bg-red-600  py-2 px-4  rounded-xl mx-2 text-white drop-shadow-xl hover:bg-red-500 hover:text-white hover:scale-105 transition duration-150 hover:drop-shadow-2xl"
                onClick={handelClearCanvas}
              >
                Clear Canvas
              </button>
            </div>
          </div>
          <div className="w-fit">
            <input
              className="rounded-xl w-fit cursor-pointer  border-2 border-red-500 "
              type="file"
              accept=".txt"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="WhiteBoard_And_Members w-screen h-screen flex justify-center relative [&>*:nth-child(3)]:bottom-20 [&>*:nth-child(3)]:left-24 [&>*:nth-child(3)]:bg-white ">
          <Canvas
            canvasRef={canvasRef}
            ctxRef={ctxRef}
            elements={elements}
            setElements={setElements}
            color={color}
            tool={tool}
          />
          <div className="AllConnectMember w-1/5 h-[85vh] m-5  rounded-3xl bg-gray-900 drop-shadow-2xl overflow-y-scroll no-scrollbar ">
            <div>
              <h1 className="text-center text-xl font-semibold">
                Connected Member
              </h1>
            </div>
            <ConnectMemberCard />
          </div>
          <div className="VideoCall absolute w-32 h-32 rounded-2xl drop-shadow-2xl overflow-hidden ">
            <img src={images[5].url} alt="" className="h-full scale-125" />
          </div>
        </div>

        <div className="Messages h-[70vh]">
          <div className="ChatArea h-5/6 w-5/6 m-10 rounded-lg">
            <h1 className="text-2xl font-semibold mx-5">Live Chats</h1>
            <div className="col-span-7 text-center bg-gray-900 h-full rounded-xl mx-2 drop-shadow-2xl ">
              <div className="flex flex-col relative w-[100%] h-full ">
                <div className="user-query flex-1 flex items-end ">
                  <Chats />
                </div>
                <InputBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
