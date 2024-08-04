"use client";

import { AccessTimeOutlined } from "@mui/icons-material";
import { memo, useEffect, useState } from "react";

function TimeDiff({ timestamp }) {
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const timestamps = new Date(timestamp);
    const now = new Date();
    const diffInMilliseconds = now - timestamps;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    if (diffInMinutes > 60) {
      const times = Math.floor(diffInMinutes / 60);
      switch (times) {
        case times > 24:
          setTime(times);
          setText("day ago");
          break;
        default:
          setTime(times);
          setText("hour ago");
          break;
      }
    } else {
      setTime(diffInMinutes);
      setText("min ago");
    }
  }, [timestamp]);

  return (
    <div className="flex space-x-2 text-[12px] justify-end items-center">
      <AccessTimeOutlined className="text-slate-400" fontSize="inherit" />
      <span className="flex space-x-1">
        <p className="text-slate-500 "> {time}</p>
        <p className="te text-blue-400">{text}</p>
      </span>
    </div>
  );
}

export const TimeDifference = memo(TimeDiff);
