import React, { useEffect, useState } from "react";
import PaPaJohns from '../json/papajohns.json';
import { GrPowerReset } from "react-icons/gr";

interface Pizza {
    이미지: string;
    품명: string;
}

const Papajohns = () => {
    const [papaJson, setPapaJson] = useState<Pizza[]>([]);

    useEffect(() => {
        setPapaJson(PaPaJohns)
    }, [])

    const randomIndex = Math.floor(Math.random() * papaJson.length);
    return (
        <div>
            <img src={papaJson[randomIndex]?.이미지} alt={papaJson[randomIndex]?.품명} />
            <strong>{papaJson[randomIndex]?.품명}</strong>
            <GrPowerReset />
        </div>
    );
};

export default Papajohns;