import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../App.css";

class ListingCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.listing.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.listing.name}</h5>
          <p className="card-text">{this.props.listing.description}</p>
          <p className="card-text">Asking price: ${this.props.listing.price}</p>
          <p className="card-text">
            Date of Posting: {this.props.listing.startDate}
          </p>
          <p className="card-text">Expires: {this.props.listing.endDate}</p>
        </div>
        <div className="card-footer">
          <div>
            <small className="text-muted">
              <button
                type="button"
                class="btn btn-info"
                onClick={() => this.props.handleDelete(this.props.listing.id)}
              >
                <span className="glyphicon glyphicon-bin">Remove</span>
              </button>
            </small>
            <small className="text-muted">
              <button
                type="button"
                className="btn btn-info"
                onClick={() =>
                  this.props.handleUpdate(
                    this.props.listing.id,
                    this.props.listing.name,
                    this.props.listing.description,
                    this.props.listing.price,
                    this.props.listing.startDate,
                    this.props.listing.endDate
                  )
                }
              >
                <span className="glyphicon glyphicon-bin">Edit</span>
              </button>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingCard;
