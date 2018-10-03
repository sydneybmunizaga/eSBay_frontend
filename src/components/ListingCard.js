import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ListCardForm from "./ListCardForm";
import "../App.css";

class ListingCard extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      selectedListing: null
    };
  }

  edit = e => {
    console.log(`got to edit`);
    this.setState({
      editing: true,
      selectedListing: e.target.parentNode.id
    });
  };

  cancel = e => {
    console.log(`got to cancel`);
    this.setState({
      editing: false
    });
  };

  render() {
    console.log(this.props);
    return this.state.editing ? (
      <ListCardForm listing={this.props.listing} cancel={this.cancel} />
    ) : (
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
                id={this.props.listing.id}
                className="btn btn-info"
                onClick={e => this.edit(e)}
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
