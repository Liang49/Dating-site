import React from "react";
import "./styles.css";
import Login from "./Login";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1 style={{ color: "red", textAlign: "center" }}> Find You Love</h1>
        <h1 style={{ color: "red", textAlign: "center" }}>
          Your fated one may be here
        </h1>

        <Login />
      </div>
    );
  }
}

export default HomePage;
