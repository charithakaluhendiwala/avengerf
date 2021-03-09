import React, { Component } from "react";

class Avenger extends Component {
  state = {
  };
  // isAvenger() {
  //   return this.state.avengerId > 1000 ? "He is an Avenger" : "Not an Avenger";
  // }
  showmovies() {
    // if (this.props.avenger.movies.length === 0)
    //   return <p>"No movies available"</p>;
    return (
      this.props.avenger.movies &&
      this.props.avenger.movies.map((movies, index) => (
        <ul key={index}>
          <li key={index}>{movies}</li>
        </ul>
      ))
    );
  }
  // likeAvenger = (addCounter) => {
  //   this.setState({ likeCount: this.props.avenger.likeCount + addCounter });
  // };
  render() {
    return (
      // <React.Fragment>
      //     <h1>Avenger Incoming ... </h1>
      //     <button className="btn btn-primary">Click Here {this.state.avengerId} </button>
      //     <p style={{color:"red", fontSize:"20px"}}>{this.isAvenger()}</p>
      // </React.Fragment>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.avenger.imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.avenger.name}</h5>
          <p className="card-text">{this.props.avenger.birthName}</p>
          {this.showmovies()}
          <button className="btn btn-primary" onClick={this.props.onLike}>
            Like{" "}
            <span>
              <span className="badge badge-warning">
                {this.props.avenger.likeCount}
              </span>
            </span>
          </button>{"  "}
          <button className="btn btn-danger" onClick={this.props.onLike}>
            Like{" "}
            <span>
              <span className="badge badge-warning">
                {this.props.avenger.likeCount}
              </span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
 
export default Avenger;
