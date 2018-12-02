import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ListingContainer from "./components/ListingContainer";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      user: [],
      status: null
    };
  }

  getListings = () => {
    fetch(`http://localhost:3000/listings`)
      .then(r => r.json())
      .then(listingData =>
        this.setState({
          listings: listingData
        })
      );
  };

  componentDidMount() {
    this.getListings();
  }

  getUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then(r => r.json())
      .then(userData =>
        this.setState({
          user: userData[0]
        })
      );
  };

  componentDidMount() {
    this.getUsers();
    this.getListings();
  }

  handleAddListing = evt => {
    evt.preventDefault();
    const name = evt.target.children[0].lastElementChild.value;
    const descrip = evt.target.children[1].lastElementChild.value;
    const image = evt.target.children[2].lastElementChild.value;
    const price = evt.target.children[3].lastElementChild.value;
    const startDate = evt.target.children[4].lastElementChild.value;
    const endDate = evt.target.children[5].lastElementChild.value;
    this.sendFormDataToBackend(name, descrip, image, price, startDate, endDate);
    document.getElementById("form").reset();
  };

  sendFormDataToBackend = (name, descrip, image, price, startDate, endDate) => {
    let data = {
      name: name,
      description: descrip,
      image: image,
      price: price,
      startDate: startDate,
      endDate: endDate,
      status: "listing",
      user: 1
    };
    fetch(`http://localhost:3000/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(data =>
        this.setState({
          listings: [...this.state.listings, data]
        })
      );
  };

  handleDelete = id => {
    fetch(`http://localhost:3000/listings/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(data => {
        this.getListings();
      });
  };

  cancel = () => {
    this.setState({ editing: false });
  };

  handleUpdate = e => {
    let id = e.target.id;
    let name = e.target[0].value;
    let descrip = e.target[1].value;
    let image = e.target[2].value;
    let price = e.target[3].value;
    let startDate = e.target[4].value;
    let endDate = e.target[5].value;
    fetch(`http://localhost:3000/listings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: descrip,
        price: price,
        startDate: startDate,
        endDate: endDate
      })
    })
      .then(r => r.json())
      .then(data => this.getListings());
  };

  render() {
    return (
      <div>
        <NavBar />
        <Login users={this.state.user} />
        {this.state.listings.length === 0 ? (
          <h4>Nothing to sell</h4>
        ) : (
          <ListingContainer
            listings={this.state.listings}
            handleDelete={this.handleDelete}
            cancel={this.cancel}
            handleUpdate={this.handleUpdate}
          />
        )}
        <Profile
          user={this.state.user}
          handleAddListing={this.handleAddListing}
        />
      </div>
    );
  }
}

export default App;
