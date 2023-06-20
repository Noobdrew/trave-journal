import pin from "../assets/pin.png";
import japan from "../assets/japan.png";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.item.imageUrl} alt="japan" className="location-img" />
        <div className="description">
          <div className="location">
            <div className="country-conteiner">
              <img src={pin} alt="marker" />
              <h4 className="country">{props.item.location}</h4>
            </div>

            <a
              href={props.item.googleMapsUrl}
              className="map-link"
              target="blank"
            >
              Google maps
            </a>
          </div>
          <h1 className="title">{props.item.title}</h1>
          <p className="date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="description-text">{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
