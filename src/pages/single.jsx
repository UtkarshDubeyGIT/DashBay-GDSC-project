import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Chart from "../components/chart";
import List from "../components/table";

const Single = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="p-5 flex gap-5">
          <div className="flex-1 relative p-5 shadow-md bg-white rounded-lg">
            <button className="absolute top-0 right-0 p-2 text-sm text-purple-600 bg-purple-100 rounded-bl-lg cursor-pointer">Edit</button>
            <h1 className="text-gray-500 text-lg mb-5">Information</h1>
            <div className="flex gap-5 items-center">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="User profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-lg text-gray-700">Jane Doe</h1>
                <div className="text-sm text-gray-600">
                  <div className="mb-2">
                    <span className="font-semibold text-gray-500 mr-2">Email:</span>
                    <span>janedoe@gmail.com</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-gray-500 mr-2">Phone:</span>
                    <span>+1 2345 67 89</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-gray-500 mr-2">Address:</span>
                    <span>Elton St. 234 Garden Yd. NewYork</span>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-gray-500 mr-2">Country:</span>
                    <span>USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="shadow-md p-5 m-5 bg-white rounded-lg">
          <h1 className="text-gray-500 text-lg mb-5">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;





// import Sidebar from "../../components/sidebar";
// import Navbar from "../../components/navbar";
// import Chart from "../../components/chart";
// import List from "../../components/table";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//                 alt=""
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">Jane Doe</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">janedoe@gmail.com</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">+1 2345 67 89</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     Elton St. 234 Garden Yd. NewYork
//                   </span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
//           </div>
//         </div>
//         <div className="bottom">
//         <h1 className="title">Last Transactions</h1>
//           <List/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;


