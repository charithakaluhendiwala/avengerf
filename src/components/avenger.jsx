import React, { Component } from "react";

class Avenger extends Component {
  state = {
    avengerId: 10,
    movies: ["First Avenger", "Infinity War", "End Game"],
    likeCount:this.props.likeCount,
  };
  isAvenger() {
    return this.state.avengerId > 1000 ? "He is an Avenger" : "Not an Avenger";
  }
  showmovies() {
    if (this.state.movies.length === 0) return <p>"No movies available"</p>;
    return this.state.movies.map((movies,index) => 
      <ul key={index}>
        <li key={index}>{movies}</li>
      </ul>
    );
  }
  likeAvenger = (addCounter) => {
    this.setState({ likeCount: this.state.likeCount + addCounter }); 
  };
  render() {
    return (
      // <React.Fragment>
      //     <h1>Avenger Incoming ... </h1>
      //     <button className="btn btn-primary">Click Here {this.state.avengerId} </button>
      //     <p style={{color:"red", fontSize:"20px"}}>{this.isAvenger()}</p>
      // </React.Fragment>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-transparent-png-image-download-2.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.avengerName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {this.showmovies()}
          <button
            className="btn btn-primary"
            onClick={() => this.likeAvenger(1)}
          >
            Like{" "}
            <span>
              <span className="badge badge-warning">
                {this.state.likeCount}
              </span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Avenger;
