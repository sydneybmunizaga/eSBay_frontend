import "bootstrap/dist/css/bootstrap.min.css";
import ListingCard from "./ListingCard";
import React, { Component } from "react";
import "../App.css";

class ListingContainer extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-columns">
          {this.props.listings.map(listing => (
            <ListingCard
              listing={listing}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListingContainer;
