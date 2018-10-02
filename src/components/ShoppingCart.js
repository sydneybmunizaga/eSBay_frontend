import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ListingCard from "./ListingCard";
import "../App.css";

class ShoppingCart extends Component {
  render() {
    return (
      <div className="card-container">
        <h4>Shopping Cart</h4>
        <div className="card-columns">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
