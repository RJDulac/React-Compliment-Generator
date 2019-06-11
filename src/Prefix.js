import React, { Component } from "react";

class Prefix extends Component {
  static defaultProps = {
    list: [
      { word: "amazingly" },
      { word: "wonderfully" },
      { word: "wicked" },
      { word: "spectacularly" },
      { word: "extraordinarily" },
      { word: "astonishingly" },
      { word: "very" },
      { word: "extremely" },
      { word: "incredibly" },
      { word: "uncommonly" },
      { word: "unusually" },
      { word: "remarkably" },
      { word: "beautifully" },
      { word: "outstandingly" },
      { word: "wondrously" },
      { word: "marvelously" },
      { word: "cheerfully" },
      { word: "pleasantly" }
    ]
  };
  render() {
    const { list } = this.props;
    const index = Math.floor(Math.random() * list.length);
    return ` ${list[index].word}`;
  }
}

export default Prefix;
