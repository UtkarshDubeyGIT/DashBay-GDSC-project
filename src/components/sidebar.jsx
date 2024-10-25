import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="invisible sm:visible flex flex-col w-1/5 border-r border-gray-200 min-h-screen bg-white">
      <div className="flex items-center justify-center h-12">
        <Link to="/" className="text-xl font-bold text-green-500 no-underline">
          DashBay
        </Link>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="pl-2">
        <ul className="list-none m-0 p-0 px-2">
          <p className="text-xs font-bold text-gray-500 mt-4 mb-1">MAIN</p>
          <Link to="/">
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <DashboardIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Dashboard</span>
          </li>
          </Link>
          <p className="text-xs font-bold text-gray-500 mt-4 mb-1">LISTS</p>
          <Link to="/users" className="no-underline">
            <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
              <PersonOutlineIcon className="text-green-700 text-lg" />
              <span className="text-sm font-semibold text-gray-500 ml-2">Users</span>
            </li>
          </Link>
          <Link to="/products" className="no-underline">
            <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
              <StoreIcon className="text-green-700 text-lg" />
              <span className="text-sm font-semibold text-gray-500 ml-2">Products</span>
            </li>
          </Link>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <CreditCardIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Orders</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <LocalShippingIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Delivery</span>
          </li>
          <p className="text-xs font-bold text-gray-500 mt-4 mb-1">USEFUL</p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <InsertChartIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Stats</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <NotificationsNoneIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Notifications</span>
          </li>
          <p className="text-xs font-bold text-gray-500 mt-4 mb-1">SERVICE</p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <SettingsSystemDaydreamOutlinedIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">System Health</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <PsychologyOutlinedIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Logs</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <SettingsApplicationsIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Settings</span>
          </li>
          <p className="text-xs font-bold text-gray-500 mt-4 mb-1">USER</p>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <AccountCircleOutlinedIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Profile</span>
          </li>
          <li className="flex items-center p-2 cursor-pointer hover:bg-green-100">
            <ExitToAppIcon className="text-green-700 text-lg" />
            <span className="text-sm font-semibold text-gray-500 ml-2">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="top">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">DashBay</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
//           <li>
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           <p className="title">LISTS</p>
//           <Link to="/users" style={{ textDecoration: "none" }}>
//             <li>
//               <PersonOutlineIcon className="icon" />
//               <span>Users</span>
//             </li>
//           </Link>
//           <Link to="/products" style={{ textDecoration: "none" }}>
//             <li>
//               <StoreIcon className="icon" />
//               <span>Products</span>
//             </li>
//           </Link>
//           <li>
//             <CreditCardIcon className="icon" />
//             <span>Orders</span>
//           </li>
//           <li>
//             <LocalShippingIcon className="icon" />
//             <span>Delivery</span>
//           </li>
//           <p className="title">USEFUL</p>
//           <li>
//             <InsertChartIcon className="icon" />
//             <span>Stats</span>
//           </li>
//           <li>
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li>
//           <p className="title">SERVICE</p>
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>System Health</span>
//           </li>
//           <li>
//             <PsychologyOutlinedIcon className="icon" />
//             <span>Logs</span>
//           </li>
//           <li>
//             <SettingsApplicationsIcon className="icon" />
//             <span>Settings</span>
//           </li>
//           <p className="title">USER</p>
//           <li>
//             <AccountCircleOutlinedIcon className="icon" />
//             <span>Profile</span>
//           </li>
//           <li>
//             <ExitToAppIcon className="icon" />
//             <span>Logout</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;