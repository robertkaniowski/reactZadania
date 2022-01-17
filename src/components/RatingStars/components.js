import React, { Component } from "react";
import SingleRatingStars from "../singleRatingsStar/components";
class RatingStars extends React.Component {
  state = {
    ratingData: [
      { name: "Jan", points: 22 },
      { name: "Kasia", points: 15 },
      { name: "Dawid", points: 5 }
    ]
  };
  handleUpdateBox = (indexToUpadte, ratingData) => {
    this.setState((prevState) => {
      const ratingData = prevState.ratingData.map((timebox, index) =>
        index === indexToUpadte ? ratingData : timebox
      );
      return { ratingData };
    });
  };
  render() {
    return (
      <>
        {this.state.ratingData.map((single, index) => (
          <SingleRatingStars
            key={index}
            indexElelment={index}
            name={single.name}
            points={single.points}
            onUpdated={(value) =>
              this.handleUpdateBox(index, {
                ...ratingData,
                name: name,
                points: value.points
              })
            }
          />
        ))}
      </>
    );
  }
}

export default RatingStars;
