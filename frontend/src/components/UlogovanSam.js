import React from "react";
import './UlogovanSam.css';

class UlogovanSam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isMouseOver: false
  };
}

handleMouseEnter = () => {
  this.setState({ isMouseOver: true });
}

handleMouseLeave = () => {
  this.setState({ isMouseOver: false });
}

handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('admin');
  window.location = '/';
}

render() {
  const { isMouseOver } = this.state;

  return (
    <div className="dropdown">
      <div
        className={`label-container ${isMouseOver ? 'active' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <label className="dropbtn">Prijavljeni ste</label>
        {isMouseOver && (
          <button className="logout-button" onClick={this.handleLogout}>
            Izloguj se
          </button>
        )}
      </div>
    </div>
  );
}
}

export default UlogovanSam;