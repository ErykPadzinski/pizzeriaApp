import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./deliveryDesc.css";

export default function DeliveryDesc(props) {
  return (
    <div className="del-desc-container">
      <FontAwesomeIcon className="del-desc-icon" icon={props.icon} />
      <p className="del-desc-text">{props.text}</p>
    </div>
  );
}
