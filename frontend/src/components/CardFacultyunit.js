import React from "react";
import "./CardListFaculty.css";

class CardFacultyunit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ime: props.ime, url:props.URL };
  }

  render() {
    let { ime } = this.state;
    return (
      <div
        className="card"
      >
        <a href={this.state.url} target="_blank">{ime}</a>
      </div>
    );
  }
}

export default CardFacultyunit;
