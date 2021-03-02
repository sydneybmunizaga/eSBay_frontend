import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ProfileBar from "./ProfileBar";
import Form from "./Form";
import "../App.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileBar userInfo={this.props.user} />
        <Form handleAddListing={this.props.handleAddListing} />
        <Form handleAddListing={this.props.handleAddListing} />
      </div>
    );
  }
}

export default Profile;
