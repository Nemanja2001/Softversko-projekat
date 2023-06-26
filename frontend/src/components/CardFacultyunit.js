import React from "react";
import "./CardListFaculty.css";

class CardFacultyunit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ime: props.ime };
  }

  render() {
    let { ime } = this.state;
    return (
      <div
        className="card"
        onClick={() =>
          (window.location =
            "/univerziteti/" +
            localStorage.getItem("UniversityID") +
            "/fakulteti/" +
            localStorage.getItem("faculty") +
            "/fakultetskejedinice/" +
            ime)
        }
      >
        {ime}
      </div>
    );
  }
}

export default CardFacultyunit;
