import React, { Component } from "react";

class Suffix extends Component {
  static defaultProps = {
    list: [
      { word: "awesome" },
      { word: "intelligent" },
      { word: "smart" },
      { word: "hardworking" },
      { word: "gifted" },
      { word: "exceptional" },
      { word: "jovial" },
      { word: "extraordinary" },
      { word: "stupefying" },
      { word: "marvelous" },
      { word: "enlightening" },
      { word: "informative" },
      { word: "phenomenal" },
      { word: "tactical" },
      { word: "dapper" },
      { word: "elegant" },
      { word: "strategic" },
      { word: "wonderful" },
      { word: "honest" },
      { word: "bright" },
      { word: "optimistic" }
    ]
  };
  render() {
    const { list } = this.props;
    const index = Math.floor(Math.random() * list.length);
    return ` ${list[index].word}!`;
  }
}
export default Suffix;
