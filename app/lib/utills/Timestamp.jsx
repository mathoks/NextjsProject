"use client";

import { AccessTimeOutlined } from "@mui/icons-material";
import { memo, useEffect, useState, useRef} from "react";

// function TimeDiff({ timestamp }) {
//   const [time, setTime] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     const timestamps = new Date(timestamp);
//     const now = new Date();
//     const diffInMilliseconds = now - timestamps;
//     const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
//     if (diffInMinutes > 60) {
//       const times = Math.floor(diffInMinutes / 60);
//       switch (times) {
//         case (times > 24):
//           setTime(times);
//           setText("day ago");
//           break;
//         default:
//           setTime(times);
//           setText("hour ago");
//           break;
//       }
//     } else {
//       setTime(diffInMinutes);
//       setText("min ago");
//     }
//   }, [timestamp]);

//   return (
//     <div className="flex space-x-2 text-[12px] justify-end items-center">
//       <AccessTimeOutlined className="text-slate-400" fontSize="inherit" />
//       <span className="flex space-x-1">
//         <p className="text-slate-500 "> {time}</p>
//         <p className="te text-blue-400">{text}</p>
//       </span>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from 'react';
// import { AccessTimeOutlined } from '@mui/material';

function TimeDiff({ timestamp }) {
  const [time, setTime] = useState(0);
  const [text, setText] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const diffInMilliseconds = now - new Date(timestamp);
      const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

      if (diffInMinutes < 60) {
        setTime(diffInMinutes);
        setText('min ago');
      } else {
        const hours = Math.floor(diffInMinutes / 60);
       if(hours > 24){
         setTime(Math.floor(hours/24));
        setText('day ago');
       }
       else {
        setTime(hours);
        setText('hour ago');
       }
      }
    };

    calculateTimeDifference();
    intervalRef.current = setInterval(calculateTimeDifference, 60000); // Update every minute

    return () => clearInterval(intervalRef.current);
  }, [timestamp]);

  return (
    <div className="flex space-x-2 text-[12px] justify-end items-center">
      <AccessTimeOutlined className="text-slate-400" fontSize="inherit" />
      <span className="flex space-x-1">
        <p className="text-slate-500">{time}</p>
        <p className="te text-blue-400">{text}</p>
      </span>
    </div>
  );
}

export const TimeDifference = memo(TimeDiff);

