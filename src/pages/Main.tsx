import axios from "axios";
import React, { useEffect, useState } from "react";
import PaPaJohns from '../json/papajohns.json';

interface Pizza {
  이미지: string;
  품명: string;
}

const Main = () => {
  const [data, setData] = useState<Pizza[]>([]);

  useEffect(() => {
    setData(PaPaJohns)
  }, [])


  return (
    <>
      {data.map((item) => (
        <div key={item.이미지}>
          <img src={item.이미지} alt={item.품명} />
          <p>{item.품명}</p>
        </div>
      ))}
    </>
  );
};

export default Main;
