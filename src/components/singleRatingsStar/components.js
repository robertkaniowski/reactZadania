import React, { Component } from "react";
// import
function SingleRatingStars(props) {
  const { name, points, onUpdated } = props;

  const handleUpdatePoints = (event) => {
    onUpdated({ name: name, points: event.target.value });
  };
  return (
    <div>
      <p>{name}</p>
      <label>pkt: {}</label>
      <input value={points} onChange={this.handleUpdatePoints} type="number" />
    </div>
  );
}

export default SingleRatingStars;
