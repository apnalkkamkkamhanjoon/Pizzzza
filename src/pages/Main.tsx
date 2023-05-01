import Pizzacontainer from '../components/Pizzacontainer'

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let week = ["일", "월", "화", "수", "목", "금", "토"];
let dayName = week[today.getDay()];

const Main = () => {

  return (
    <>
      <div>
        <p>
          {year}년 {month}월 {date}일 {dayName}요일
        </p>
        <Pizzacontainer />
      </div>
    </>
  );
};

export default Main;
