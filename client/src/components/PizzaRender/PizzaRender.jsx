import "./PizzaRender.css";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch.js";

const PizzaRender = () => {
  const { data: pizzaData, loading: pizzaLoading } = useFetch(`pizza`);
  const { data: ingredientData, loading: ingredientLoading } =
    useFetch(`ingredient`);

  if (pizzaLoading || ingredientLoading) {
    return "Loading";
  }

  const getIngredientsNames = (ingredientIds) => {
    return ingredientIds.map((ingredientId) => {
      const ingredient = ingredientData.find(
        (ingredient) => ingredient._id === ingredientId
      );
      return ingredient ? ingredient.name : "";
    });
  };

  return (
    <div className="pizza-container">
      <div className="pizza">
        {pizzaData.map((item) => (
          <Link to={`pizza/${item._id}`} key={item._id}>
            <div className="single-pizza" key={item._id}>
              <img className="pizza-img" src={item.photos}></img>
              <div className="pizza-desc">
                <p className="pizza-name">{item.name}</p>
                <p className="pizza-ing">
                  {getIngredientsNames(item.ingredients).join(", ")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PizzaRender;
