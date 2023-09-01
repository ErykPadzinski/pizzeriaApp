import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import SinglePizza from "../src/pages/singlePizza/SinglePizza";
import OrderSucces from "../src/pages/orderSucces/OrderSucces";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<SinglePizza />} />
        <Route path="/pizza/succes" element={<OrderSucces />} />
      </Routes>
    </Router>
  );
}
