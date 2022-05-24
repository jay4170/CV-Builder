import "./App.css";
import { Component } from "react";
import CVMain from "./CV-Main/CVMain";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CVMirror from "./CV/CVMirror";
import Test from "./CV/components/Test.js";

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="cv_creator_page">
          <CVMain />
        </div>
        <CVMirror cvInfo={Test}></CVMirror>
        <Footer />
      </div>
    );
  }
}

export default App;
