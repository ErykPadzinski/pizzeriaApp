import "./home.css";
import useFetch from "../../hooks/useFetch";
import Header from "../../src/components/Header/Header";
import { Link } from "react-router-dom";

function Home() {
  const { data, loading } = useFetch(`pizza`);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div className="home">
          <Header />

          <div className="pizza-container">
            <div className="pizza">
              {data.map((item) => (
                <Link to={`pizza/${item._id}`} key={item._id}>
                  <div className="single-pizza" key={item._id}>
                    <img className="pizza-img" src={item.photos}></img>
                    <div className="pizza-desc">
                      <p className="pizza-name">{item.name}</p>
                      <p className="pizza-ing">{item.ingredients}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
