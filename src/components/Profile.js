import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ProfileBar from "./ProfileBar";
import Form from "./Form";
import ShoppingCart from "./ShoppingCart";
import Purchases from "./Purchases";
import Selling from "./Selling";
import "../App.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileBar userInfo={this.props.user} />
        <Form handleAddListing={this.props.handleAddListing} />
      </div>
    );
  }
}

export default Profile;
