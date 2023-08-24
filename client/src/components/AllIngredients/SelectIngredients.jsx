/* eslint-disable react/prop-types */
import useFetch from "../../../hooks/useFetch";
import "./SelectIngredients.css";
import { useState } from "react";

const SelectIngredients = ({ selectedIngredients, onIngredientSelect }) => {
  const { data, loading } = useFetch("ingredient");
  const [activeIndexes, setActiveIndexes] = useState([]);

  if (loading) {
    return "Loading";
  }

  function handleClick(index, ingredientId) {
    const newIndexes = [...activeIndexes];
    if (newIndexes.includes(index)) {
      newIndexes.splice(newIndexes.indexOf(index), 1);
    } else {
      newIndexes.push(index);
    }
    setActiveIndexes(newIndexes);

    if (newIndexes.includes(index)) {
      // Add ingredientId to selectedIngredients
      onIngredientSelect([...selectedIngredients, ingredientId]);
    } else {
      // Delete ingredientId from selectedIngredients
      onIngredientSelect(
        selectedIngredients.filter((id) => id !== ingredientId)
      );
    }
  }

  return (
    <div className="select">
      {data.map((item, index) => (
        <div
          key={item._id}
          className={`select-item${
            activeIndexes.includes(index) ? "-active" : ""
          }`}
          onClick={() => handleClick(index, item._id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SelectIngredients;
