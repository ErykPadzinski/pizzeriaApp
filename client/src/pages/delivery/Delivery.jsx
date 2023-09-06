import DeliveryDesc from "../../components/DeliveryDesc/DeliveryDesc";
import Header from "../../components/Header/Header";
import "./delivery.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export default function Delivery() {
  return (
    <div className="delivery-container">
      <Header type="menu" />
      <div className="test">
        <div className="delivery-desc">
          <DeliveryDesc
            icon={faTruck}
            text="Dowozimy nasze dania na terenie Warszawy oraz każdej miejscowości
          znajującej się 20 kilometrów od centrum Warszawy."
          />
          <DeliveryDesc
            icon={faClock}
            text="Jeśli nie uda nam się dostarczyć twojego zamówienia w ciągu 60 minut,
          otrzymasz od nas 50% zniki na swoje zamówienie"
          />
          <DeliveryDesc
            icon={faCreditCard}
            text="Nasi dostawcy zawsze zabierają ze sobą terminal więc jeśli nie masz przy sobie gotówki, zawsze możesz zapłacić kartą "
          />
        </div>
      </div>
    </div>
  );
}
