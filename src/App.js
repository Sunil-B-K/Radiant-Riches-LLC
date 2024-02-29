import "./App.css";
import Actioin from "./Commonents/Action/Actioin";
import Footer from "./Commonents/Footer/Footer";
import Navbar from "./Commonents/Nevbar/Navbar";
import Product from "./Commonents/Prodduct/Product";
import Realted from "./Commonents/Realted/Realted";
import Title from "./Commonents/Title/Title";
import Tool from "./Commonents/Tool/Tool";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Tool />
      <Product />
      <Realted />
      <Actioin />
      <Footer />
    </div>
  );
}

export default App;
