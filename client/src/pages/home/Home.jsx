import "./home.css";
import Header from "../../components/Header/Header";
import PizzaRender from "../../components/PizzaRender/PizzaRender";

function Home() {
  return (
    <div className="home">
      <Header />
      <PizzaRender />
    </div>
  );
}

export default Home;
