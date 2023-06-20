import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <img src={globe} alt="globe" />
      <p>My Travel Journal</p>
    </header>
  );
}
