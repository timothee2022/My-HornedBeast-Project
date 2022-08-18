import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
class HornedBeast extends React.Component {


  constructor(props) {
    console.log(props.title);
    super(props);

    this.state = { votes: 0 };
  }

  upvote = () => {
    this.setState({ votes: this.state.votes + 1 })
  }
  render() {
    return (


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title><h2>{this.props.title}</h2></Card.Title>
          <img alt="" />
          <Card.Img onClick={this.upvote}
            src={this.props.imageURL}
            alt={this.props.description}
            title={this.props.title} />
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            Favorites: {this.state.votes}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeast;