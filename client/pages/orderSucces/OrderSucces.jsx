import { useNavigate } from "react-router-dom";

const OrderSucces = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Zamówienie złożone pomyślnie</h2>
      <button onClick={() => navigate("/")}>Powrót do strony głównej</button>
    </div>
  );
};

export default OrderSucces;
