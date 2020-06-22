import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../App.css";

class Form extends Component {
  render() {
    return (
      <div className="form" class="col-6 col-md-4">
        <h4>Add a listing!</h4>
        <form id="form" onSubmit={evt => this.props.handleAddListing(evt)}>
          <div className="form-group" id="name">
            <label>Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group" id="descrip">
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="3"
              style={
                ({ "z-index": "auto" },
                { position: "relative" },
                { "line-height": 24 },
                { "font-size": 16 })
              }
            />
          </div>
          <div className="form-group" id="image">
            <label>Image:</label>
            <input type="text" className="form-control" placeholder="url" />
          </div>
          <div className="form-group" id="price">
            <label>Asking Price:</label>
            <input type="text" className="form-control" placeholder="$$$" />
          </div>
          <div class="form-group">
            <label>Start Date:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>End Date:</label>
            <input type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Add Listing
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
