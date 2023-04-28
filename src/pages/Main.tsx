import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = `https://openapi.foodsafetykorea.go.kr/api/98f0e2203c6a4310a01e/COOKRCP01/json/1/10//RCP_NM=피자`

type PizzaProps = {
  RCP_NM: string;
  RCP_PARTS_DTLS: string;
  ATT_FILE_NO_MK: string;
  MANUAL01: string;
  MANUAL02: string;
  MANUAL03: string;
  MANUAL04: string;
  MANUAL05: string;
  MANUAL06: string;
}


const Main = () => {
  const [pizza, setPizza] = useState<PizzaProps[]>([]);

  useEffect(() => {
    axios
      .get(URL).then((res) => {
        console.log(res.data);
        setPizza(res.data.COOKRCP01?.row ?? []);
      }).catch((err) => {
        console.log(err)
      })
  }, []);


  return (
    <>
      {pizza.map((item: PizzaProps) => {
        return (
          <div key={item.RCP_NM}>
            <h1>{item.RCP_NM}</h1>
            <img style={{ width: '400px', height: '227px' }} src={item.ATT_FILE_NO_MK} alt="피자" />
            <p>{item.RCP_PARTS_DTLS}</p>
            <ul>
              <div>{item.MANUAL01}</div>
              <div>{item.MANUAL02}</div>
              <div>{item.MANUAL03}</div>
              <div>{item.MANUAL04}</div>
              <div>{item.MANUAL05}</div>
              <div>{item.MANUAL06}</div>
            </ul>
          </div>
        )
      })}
    </>
  )
};

export default Main;
