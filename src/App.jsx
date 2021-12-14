import "./components/About";
import "./components/Home/Home";
import "./components/Home/Product";
import "./components/NavBar";
import "./scss/app.scss";
import Icon from "@mui/material/Icon";

import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/_Footer";
import Product from "./components/Home/Product";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <Home />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
