import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import '../styles/main.scss'
import PaPaJohns from '../json/papajohns.json';
import Pizzacontainer from '../components/Pizzacontainer'

interface Pizza {
    이미지: string;
    품명: string;
}


const Papajohns = () => {
    const [papajohns, setPapajohns] = useState<Pizza[]>([]);

    useEffect(() => {
        setPapajohns(PaPaJohns)
    }, [])

    const randomIndex = Math.floor(Math.random() * papajohns.length);


    return (
        <div className='mainContainer'>
            <NavBar />
            <Pizzacontainer title={'파파존스'} imgSrc={papajohns[randomIndex]?.이미지} name={papajohns[randomIndex]?.품명} />
        </div>
    );
};

export default Papajohns;