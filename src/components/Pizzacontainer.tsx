import React, { useEffect, useState } from "react";
import PaPaJohns from '../json/papajohns.json';
import { GrPowerReset } from "react-icons/gr";

interface Pizza {
    이미지: string;
    품명: string;
}

const Papajohns = () => {
    const [pizzaJson, setPizzaJson] = useState<Pizza[]>([]);

    useEffect(() => {
        setPizzaJson(PaPaJohns)
    }, [])

    const randomIndex = Math.floor(Math.random() * pizzaJson.length);
    
    return (
        <div>
            <img src={pizzaJson[randomIndex]?.이미지} alt={pizzaJson[randomIndex]?.품명} />
            <strong>{pizzaJson[randomIndex]?.품명}</strong>
            <GrPowerReset />
        </div>
    );
};

export default Papajohns;