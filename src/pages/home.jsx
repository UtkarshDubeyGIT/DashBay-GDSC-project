import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Widget from "../components/widget";
import Featured from "../components/featured";
import Chart from "../components/chart";
import Table from "../components/table";

const Home = () => {
  return (
    <div className="flex md:flex">

      <div><Sidebar/></div>
      <div className="flex-1">
        <Navbar />
        <div className="flex p-5 gap-5 flex-col sm:flex-row">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex p-5 gap-5 flex-col sm:flex-row">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="shadow-md p-5 m-5 bg-white rounded-lg">
          <div className="font-medium text-gray-500 mb-4">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import Sidebar from "../../components/sidebar";
// import Navbar from "../../components/navbar";
// import Widget from "../../components/widget";
// import Featured from "../../components/featured";
// import Chart from "../../components/chart";
// import Table from "../../components/table";

// const Home = () => {
//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" />
//           <Widget type="order" />
//           <Widget type="earning" />
//           <Widget type="balance" />
//         </div>
//         <div className="charts">
//           <Featured />
//           <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
//         </div>
//         <div className="listContainer">
//           <div className="listTitle">Latest Transactions</div>
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;