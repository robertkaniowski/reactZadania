import React from "react";
// import
function SingleRatingStars(props) {
  const { indexElelment, title, points, onUpdated, onHandleDelete } = props;

  const handleUpdatePoints = (event) => {
    onUpdated({ title: title, points: event.target.value });
  };
  const handleDeleteItem = (event) => {
    onHandleDelete({ index: indexElelment });
  };
  return (
    <div className="singleBox">
      <p>Imie: {title}</p>
      <label>
        pkt:
        <input
          defaultValue={points}
          onChange={(value) => handleUpdatePoints(value)}
          type="number"
        />
      </label>
      <div onClick={(indexElelment) => handleDeleteItem(indexElelment)}>
        usun
      </div>
    </div>
  );
}

export default SingleRatingStars;
