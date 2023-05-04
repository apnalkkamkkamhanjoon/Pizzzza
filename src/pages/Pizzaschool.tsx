import NavBar from '../components/NavBar';
import '../styles/main.scss'
import PizzaContainer from '../components/Pizzacontainer';
import PizzaSchool from '../json/pizzaschool.json'
import React, { useEffect, useState } from "react";

interface Pizza {
    이미지: string;
    품명: string;
}

const Domino = () => {
    const [pizzaSchool, setPizzaSchool] = useState<Pizza[]>([]);

    useEffect(() => {
        setPizzaSchool(PizzaSchool)
    }, [])

    const randomIndex = Math.floor(Math.random() * pizzaSchool.length);
    return (
        <div className='mainContainer'>
            <NavBar />
            <PizzaContainer title={'피자스쿨'} imgSrc={pizzaSchool[randomIndex]?.이미지} name={pizzaSchool[randomIndex]?.품명}/>
        </div>
    );
};

export default Domino;