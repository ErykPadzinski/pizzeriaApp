import { useLocation } from "react-router-dom";
import "./singlePizza.css";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";
import SelectIngredients from "../../components/AllIngredients/SelectIngredients";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SinglePizza = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [addons, setAddons] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const { data: pizzaData, loading: pizzaLoading } = useFetch(`pizza/${id}`);
  const { data: ingredientData, loading: ingredientLoading } = useFetch(
    `pizza/ingredients/${id}`
  );
  const navigate = useNavigate();

  if (pizzaLoading || ingredientLoading) {
    return "Loading";
  }

  function handleClick() {
    setAddons((addons) => !addons);
  }

  const handleIngredientSelect = (ingredients) => {
    setSelectedIngredients(ingredients);
  };

  const handleOrderSubmit = async (selectedIngredients) => {
    try {
      const response = await fetch("http://localhost:8800/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pizzaId: id,
          selectedIngredients: selectedIngredients,
        }),
      });

      if (response.ok) {
        navigate("/pizza/succes");
        console.log("Zamówienie złożone pomyślnie!");
      } else {
        console.error("Wystąpił błąd podczas złożenia zamówienia.");
      }
    } catch (error) {
      console.error("Wystąpił błąd sieci:", error);
    }
  };

  return (
    <div>
      <Header type="menu" />
      <div className="singlePizza-Details">
        <img
          className="singlePizza-img"
          src={pizzaData?.photos}
          alt="pizza-img"
        />
        <div className="singlePizza-desc">
          <h1 className="singlePizza-name">{pizzaData?.name} </h1>
          <p className="singlePizza-price">{pizzaData.price} zł</p>
          <div className="singlePizza-ingredients">
            <h3>SKŁADNIKI:</h3>
            {ingredientData.map((item) => (
              <p key={item._id}>{item.name},</p>
            ))}
          </div>

          {addons && (
            <SelectIngredients
              selectedIngredients={selectedIngredients}
              onIngredientSelect={handleIngredientSelect}
            />
          )}
          <div className="singlePizza-buttons">
            <button className="singlePizza-button" onClick={handleClick}>
              Edytuj składniki
            </button>
            <button
              onClick={() => handleOrderSubmit(selectedIngredients)}
              className="singlePizza-button"
            >
              Złóż zamówienie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePizza;
