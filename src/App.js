import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./components/Card.css";
import UpdateUserButton from './UpdateUserButton';

function MainApp() {
  return (
    <div className="bg-dark">
      <Header />
      <Card />
      <Footer />
      <UpdateUserButton />
    </div>
  );
}

export default MainApp;
