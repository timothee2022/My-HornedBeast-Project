import React from "react";

class HornedBeast extends React.Component {


  constructor(props) {
    console.log(props.title);
    super(props);

    this.state = { count: 0 }
  }

  // increment the counter
  increment = (e) => {
    let nextState = {
      count: this.state.count + 1
    }
    this.setState(nextState);
    // this.setState( { count: this.state.count + 1 })
    // this.setState( { count })
  }

  // decrement the counter
  decrement = (e) => {
    let count = this.state.count - 1;
    console.log(this);
    this.setState({ count });
  }

  render() {
    return (

      // <>
        
      // </>

      <div>
        <h2>{this.props.title}</h2>
        <img id={this.props.id} src={this.props.imageURL} titlte={this.props.imgTitle} alt={this.props.description} ></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
};

export default HornedBeast;