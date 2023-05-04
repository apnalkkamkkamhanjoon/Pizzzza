
import '../styles/navbar.scss'
import { Link } from "react-router-dom";
import pizzaImg from "../asset/logo.svg";

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let week = ["일", "월", "화", "수", "목", "금", "토"];
let dayName = week[today.getDay()];

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='logoBox'>
            <img className='logo' src={pizzaImg} alt='로고'/>
            </div>
            <div className='LinkBox'>
                <Link to='/' className='link'>
                    피자스쿨
                </Link>
                <Link to='/papajohns' className='link'>
                    파파존스
                </Link>
                <Link to='/mrpizza' className='link'>
                    미스터피자
                </Link>
            </div>
            <div className='dateBox'>
            <p className='date'>
                {year}년 {month}월 {date}일 {dayName}요일
            </p>
            </div>
        </div>
    );
};

export default NavBar;