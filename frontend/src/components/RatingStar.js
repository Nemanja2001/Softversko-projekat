import React from 'react';

const RatingStar = ({ filled, onClick }) => {
  const starStyle = {
    color: filled ? 'yellow' : 'gray',
    cursor: 'pointer',
  };

  return <span className="rating-star" style={starStyle} onClick={onClick}>★</span>;
};

export default RatingStar;