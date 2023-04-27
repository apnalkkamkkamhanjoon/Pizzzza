import axios from "axios";
import React, { useEffect, useState } from "react";

type PizzaType = {
  id: number;
  name: string;
  recipe: string;
  nutritional: string;
};

const URL = `https://openapi.foodsafetykorea.go.kr/api/98f0e2203c6a4310a01e/COOKRCP01/json/1/10/RCP_NM=죽`

const Main = () => {
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [pizza, setPizza] = useState<PizzaType[]>([]);

  return <div></div>;
};

export default Main;
