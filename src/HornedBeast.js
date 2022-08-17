import React from "react";

class HornedBeast extends React.Component {


  constructor(props) {
    console.log(props.title);
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgSrc} alt={this.props.altTxt}></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
};

export default HornedBeast;