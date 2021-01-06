import React, { useEffect, useState } from "react";
import "./Old.css";

const Index: React.FC = () => {
  const [data, setData] = useState<Array<number>>([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);

  const fetchData = () => {
    let newData: Array<number> = [];
    data.map((number) => newData.push(number + 10));
    const mergeData: Array<number> = data.concat(...newData);
    setData(mergeData);
  };

  const handleScroll = () => {
    const scrollHeight: number = document.documentElement.scrollHeight;
    const scrollTop: number = document.documentElement.scrollTop;
    const clientHeight: number = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="list">
      {data.map((number) => (
        <div className="item">{number}</div>
      ))}
    </div>
  );
};

export default Index;
