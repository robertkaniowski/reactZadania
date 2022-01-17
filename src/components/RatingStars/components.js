import React from "react";
import SingleRatingStars from "../singleRatingsStar/components";
import AddRating from "../addRatingStars/components";
class RatingStars extends React.Component {
  state = {
    ratingData: [
      { id: 0, title: "Jan", points: 22 },
      { id: 1, title: "Kasia", points: 15 },
      { id: 2, title: "Dawid", points: 5 }
    ]
  };
  handleUpdateBox = (IdToUpadte, UpdateData) => {
    this.setState((prevState) => {
      const ratingData = prevState.ratingData.map((singleRating) =>
        singleRating.id === IdToUpadte ? UpdateData : singleRating
      );
      return { ratingData };
    });
  };
  addRating = (newdata) => {
    this.setState((prevState) => {
      const ratingData = [...prevState.ratingData, newdata];
      return { ratingData };
    });
  };
  handleCreate = (createdData) => {
    this.addRating(createdData);
  };
  removeData = (indexRemove) => {
    this.setState((prevState) => {
      const ratingData = prevState.ratingData.filter(
        (singleRating) => singleRating.id !== indexRemove
      );
      console.log(ratingData);
      return { ratingData };
    });
  };
  render() {
    return (
      <>
        <h2>Lista Opinii:</h2>
        {this.state.ratingData.map((singleRating, index) => (
          <SingleRatingStars
            key={index}
            indexElelment={singleRating.id}
            title={singleRating.title}
            points={singleRating.points}
            onUpdated={(value) =>
              this.handleUpdateBox(singleRating.id, {
                ...singleRating,
                title: singleRating.title,
                points: value.points
              })
            }
            onHandleDelete={() => this.removeData(singleRating.id)}
          />
        ))}
        <AddRating onCreate={this.handleCreate} />
      </>
    );
  }
}

export default RatingStars;
