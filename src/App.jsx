import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <div className="card-conteiner">
        <Card />
      </div>
    </div>
  );
}

export default App;
