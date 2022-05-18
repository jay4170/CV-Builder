import "./App.css";
import { Component } from "react";
import CVMain from "./CV-Main/CVMain";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <CVMain />
        <div>CV</div>
        <Footer />
      </div>
    );
  }
}

export default App;
