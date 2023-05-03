import React from 'react';
import { GrPowerReset } from "react-icons/gr";
import '../styles/reload.scss'

const handleClick = () =>{
    window.location.reload();
}

const Reload = () => {
    return (
        <div>
            <GrPowerReset className='reload' onClick={handleClick}/>
        </div>
    );
};

export default Reload;