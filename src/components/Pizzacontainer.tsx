import Reload from "../components/Reload";
import '../styles/pizza.scss'

type PizzaProps = {
    imgSrc: string;
    name: string;
    title: string;
}

const PizzaContainer = ({ imgSrc, name, title }: PizzaProps) => {
    return (
        <div>
            <div className="pizzaFrame">
                <Reload />
                <h1>오늘의 {title}</h1>
                <div className="imgBox">
                    <img src={imgSrc} alt={name} className='pizzaImg' />
                </div>
                <p className='pizzaName'>{name}</p>
            </div>
        </div>
    );
};

export default PizzaContainer;