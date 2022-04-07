import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ModelSearch from "./components/Models/Modal/ModalSearch";
import ModelMenu from "./components/Models/Modal/ModalMenu";
import "./asset/css/style.scss";
import HeroContainer from "./components/Hero/HeroContainer";
import Auctions from "./components/Auctions/Auctions";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <ModelSearch />
      <Auctions />
      <ModelMenu />
    </div>
  );
}

export default App;
