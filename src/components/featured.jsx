import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useState , useCallback} from "react";

const data = [
  { name: 'Gaming', value: 34 },
  { name: 'Laptops', value: 23 },
  { name: 'Appliances', value: 19 },
  { name: 'Other' , value: 50 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Qt ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`( ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
const Featured = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className="flex-4 shadow-md p-2">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="text-lg font-medium">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-1">
        <div className=" w-96 h-80">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={188}
        cy={160}
        innerRadius={50}
        outerRadius={60}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
    </ResponsiveContainer>
        </div>
        
        <p className="text-gray-500 font-medium">Total sales made today</p>
        <p className="text-2xl">$420</p>
        <p className="text-center text-gray-500 text-xs font-light">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="text-center">
            <div className="text-sm text-gray-500">Target</div>
            <div className="flex items-center text-red-500 mt-2 text-sm">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="ml-1">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Last Week</div>
            <div className="flex items-center text-green-500 mt-2 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="ml-1">$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Last Month</div>
            <div className="flex items-center text-green-500 mt-2 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="ml-1">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;


// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Featured = () => {
//   return (
//     <div className="featured">
//       <div className="top">
//         <h1 className="title">Total Revenue</h1>
//         <MoreVertIcon fontSize="small" />
//       </div>
//       <div className="bottom">
//         <div className="featuredChart">
//           <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
//         </div>
//         <p className="title">Total sales made today</p>
//         <p className="amount">$420</p>
//         <p className="desc">
//           Previous transactions processing. Last payments may not be included.
//         </p>
//         <div className="summary">
//           <div className="item">
//             <div className="itemTitle">Target</div>
//             <div className="itemResult negative">
//               <KeyboardArrowDownIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="itemTitle">Last Week</div>
//             <div className="itemResult positive">
//               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//           <div className="item">
//             <div className="itemTitle">Last Month</div>
//             <div className="itemResult positive">
//               <KeyboardArrowUpOutlinedIcon fontSize="small"/>
//               <div className="resultAmount">$12.4k</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;