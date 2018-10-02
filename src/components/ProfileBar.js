import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../App.css";

class ProfileBar extends Component {
  render() {
    return (
      <div className="profileBar">
        <div className="media">
          <img
            className="mr-3 rounded"
            src="http://getdrawings.com/image/unicorn-drawing-62.jpg"
            style={({ width: 85 }, { height: 85 })}
            data-holder-rendered="true"
          />
          <div className="media-body">
            <h5>
              {this.props.userInfo.firstname} {this.props.userInfo.lastname}
            </h5>
            @{this.props.userInfo.username}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBar;
