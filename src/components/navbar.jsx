import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="h-12 border-b border-gray-200 flex items-center text-gray-600 text-sm">
      <div className="w-full px-5 flex items-center justify-between">
        <div className="flex items-center">
        <div>
            <h1 className="text-2xl text-green-600">DashBay</h1>
        </div>
        <div className="flex items-center border border-gray-300 px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none bg-transparent placeholder:text-xs"
          />
          <SearchOutlinedIcon className="cursor-pointer"/>
        </div>
        <div className="flex items-center space-x-5">
          <div className="items-center relative invisible sm:visible">
            <LanguageOutlinedIcon className="text-lg" />
            <span className="ml-1">English</span>
          </div>
          <div className="flex items-center relative invisible sm:visible">
            <FullscreenExitOutlinedIcon className="text-lg cursor-pointer" />
          </div>
          <div className="flex items-center relative">
            <NotificationsNoneOutlinedIcon className="text-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              1
            </div>
          </div>
          <div className="flex items-center relative">
            <ChatBubbleOutlineOutlinedIcon className="text-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2
            </div>
          </div>
          <div className="flex items-center relative">
            <ListOutlinedIcon className="text-lg" />
          </div>
          <div className="flex items-center relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;


// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <div className="search">
//           <input type="text" placeholder="Search..." />
//           <SearchOutlinedIcon />
//         </div>
//         <div className="items">
//           <div className="item">
//             <LanguageOutlinedIcon className="icon" />
//             English
//           </div>
//           <div className="item">
//             <DarkModeOutlinedIcon
//               className="icon"
//               onClick={() => dispatch({ type: "TOGGLE" })}
//             />
//           </div>
//           <div className="item">
//             <FullscreenExitOutlinedIcon className="icon" />
//           </div>
//           <div className="item">
//             <NotificationsNoneOutlinedIcon className="icon" />
//             <div className="counter">1</div>
//           </div>
//           <div className="item">
//             <ChatBubbleOutlineOutlinedIcon className="icon" />
//             <div className="counter">2</div>
//           </div>
//           <div className="item">
//             <ListOutlinedIcon className="icon" />
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="avatar"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;