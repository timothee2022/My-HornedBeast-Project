import React from "react";
// import img1 from './img/image1.jpg';
// import img2 from './img/image2.jpg';
import HornedBeast from './HornedBeast';
import Data from './data.json';


class Main extends React.Component {

  constructor(props) {
    console.log(props.title);
    super(props);
    this.state = {count: 0}
  }



  render() {
    return (
      <main>
        {Data.map((value) => (
        <HornedBeast 
          _id = {value._id} 
          imageURL = {value.image_url} 
          title = {value.title} 
          description = {value.description} 
          keyword = {value.keyword} 
          horns = {value.horns} 
          key = {value._id} 
          className = "value"
        />
        ))} 
      </main>
    )
  }
};

export default Main;