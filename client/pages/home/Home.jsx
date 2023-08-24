import "./home.css";
import Header from "../../src/components/Header/Header";
import PizzaRender from "../../src/components/PizzaRender/PizzaRender";

function Home() {
  return (
    <div className="home">
      <Header />
      <PizzaRender />
    </div>
  );
}

export default Home;
