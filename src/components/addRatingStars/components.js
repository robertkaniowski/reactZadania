import React from "react";
import { v4 as uuidv4 } from "uuid";
class AddRating extends React.Component {
  state = {
    title: "",
    points: ""
  };
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handlePointsChange = (event) => {
    this.setState({ points: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate({
      id: uuidv4(),
      title: this.state.title,
      points: this.state.points
    });
  };
  render() {
    return (
      <>
        <h2>Dodaj opinie </h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Kim jestes?{" "}
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <br />
          <label>
            Ile pkt?{" "}
            <input
              value={this.state.points}
              onChange={this.handlePointsChange}
              type="number"
            />
          </label>
          <br />
          <button>Dodaj pkt</button>
        </form>
      </>
    );
  }
}

export default AddRating;
