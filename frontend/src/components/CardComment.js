import React from "react";
import './CardComment.css'
class CardCommentUniversity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: props.ime,
      prezime: props.prezime,
      text: props.tekst,
      ocjena: props.ocjena
    };
  }

  render() {
    const { ime, prezime, text, ocjena } = this.state;
    return (
      <div className="card-comment">
        <div className="comment-header">
          {ime} {prezime}:
        </div>
        <div className="comment-text">{text}</div>
        <div className="comment-footer">
          <div className="ocjena-label">Ocjena</div>
          <div className="ocjena-value">{ocjena}</div>
        </div>
      </div>
    );
  }
}

export default CardCommentUniversity;
