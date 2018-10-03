import "bootstrap/dist/css/bootstrap.min.css";
import ListingCard from "./ListingCard";
import React, { Component } from "react";
import "../App.css";

class ListingContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card-container"
        style={[{ overflow: "scroll" }, { "max-height": "400px" }]}
      >
        <div className="card-columns">
          {this.props.listings.map(listing => (
            <ListingCard
              listing={listing}
              handleDelete={this.props.handleDelete}
              renderForm={this.props.renderForm}
              cancel={this.props.cancel}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListingContainer;
