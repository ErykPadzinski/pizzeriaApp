import "./PizzaRender.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const PizzaRender = () => {
  const { data: pizzaData, loading: pizzaLoading } = useFetch(`pizza`);

  if (pizzaLoading) {
    return "Loading";
  }

  return (
    <div className="pizza-container">
      <div className="pizza">
        {pizzaData.map((item) => (
          <Link to={`pizza/${item._id}`} key={item._id}>
            <div className="single-pizza" key={item._id}>
              <img className="pizza-img" src={item.photos}></img>
              <div className="pizza-desc">
                <p className="pizza-name">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PizzaRender;
