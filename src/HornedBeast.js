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
        <img id={this.props._id} src={this.props.imageURL} title={this.props.title} alt={this.props.description} keyword={this.props.keyword} horns={this.props.horns}></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
};

export default HornedBeast;