import pin from "../assets/pin.png";
import japan from "../assets/japan.png";

export default function Card() {
  return (
    <div>
      <div className="card">
        <img src={japan} alt="japan" />
        <div className="description">
          <div className="location">
            <img src={pin} alt="marker" />
            <h4 className="coutry">Japan</h4>
            <a href="#" className="map-link">
              View on Google maps
            </a>
          </div>
          <h1 className="title">Mount Fuji</h1>
          <p className="date">12 jan, 2021 - 24 jan, 2021</p>
          <p className="description-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
