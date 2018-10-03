import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../App.css";

class ListingCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.listing.name,
      description: this.props.listing.description,
      image: this.props.listing.image,
      price: this.props.listing.price,
      startDate: this.props.listing.startDate,
      endDate: this.props.listing.endDate
    };
  }

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.listing.image}
          alt={this.props.listing.name}
        />
        <form
          id={this.props.listing.id}
          onSubmit={e => this.props.handleUpdate(e)}
        >
          <div className="form-group">
            <input
              className="form-control"
              name="artists-name"
              value={this.state.name}
              placeholder={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="description"
              value={this.state.description}
              placeholder={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="image"
              value={this.state.image}
              placeholder={this.state.image}
              onChange={e => this.setState({ image: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="price"
              value={this.state.price}
              placeholder={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="startDate"
              value={this.state.startDate}
              placeholder={this.state.startDate}
              onChange={e => this.setState({ startDate: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="endDate"
              value={this.state.endDate}
              placeholder={this.state.endDate}
              onChange={e => this.setState({ endDate: e.target.value })}
            />
          </div>
          <div className="card-footer">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.props.cancel}
            >
              Cancel
            </button>
            <button className="btn btn-secondary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ListingCardForm;
