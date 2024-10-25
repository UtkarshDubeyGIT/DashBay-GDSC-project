import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="shadow-md p-4 m-5 bg-white rounded-lg">
          <h1 className="text-gray-500 text-2xl">{title}</h1>
        </div>
        <div className="flex shadow-md p-4 m-5 bg-white rounded-lg gap-5">
          <div className="flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="uploaded preview"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
          </div>
          <div className="flex-2">
            <form className="flex flex-wrap gap-8 justify-around">
              <div className="w-2/5">
                <label htmlFor="file" className="flex items-center gap-2 cursor-pointer">
                  Image: <DriveFolderUploadOutlinedIcon className="text-gray-500" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
              </div>

              {inputs.map((input) => (
                <div className="w-2/5" key={input.id}>
                  <label className="block mb-1 text-gray-500">{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-1 border-b border-gray-300 outline-none"
                  />
                </div>
              ))}
              <button className="w-36 p-2 mt-4 bg-teal-500 text-white font-bold rounded hover:bg-teal-600">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;




// import Sidebar from "../../components/sidebar";
// import Navbar from "../../components/navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>{title}</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>

//               {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input type={input.type} placeholder={input.placeholder} />
//                 </div>
//               ))}
//               <button>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;