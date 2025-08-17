import { useRef } from "react"
import MainTable from "./components/MainTable"
import { format } from "date-fns"
import { toPng } from 'html-to-image';

function App() {
  const ref = useRef(null);
  const date = new Date();

  const handleScreenshot = async () => {
    if (ref.current === null) return;

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div ref={ref} className="flex flex-col justify-center items-center bg-white">
        <h1 className="text-cyan-600 font-bold text-xl mt-2 ">{format(date, "MMMM d, yyyy, EEEE")}</h1>
        <MainTable />
      </div>
      <button onClick={handleScreenshot} className="ml-[6rem] bg-cyan-600 hover:cursor-pointer text-white m-2 py-2 px-4 rounded-2xl">Screenshot</button>
    </div>
  )
}

export default App
