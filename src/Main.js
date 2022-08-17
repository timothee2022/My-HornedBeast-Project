import React from "react";
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'
import HornedBeast from './HornedBeast'
import data from './data.json'


class Main extends React.Component {

  constructor(props) {
    console.log(props.title);
    super(props);
  }

  render() {
    return (
      <main>
        {DataTransfer.map((value) => (<HornedBeast _id = {value._id} image_url = {value.image_url} title = {value.title} description = {value.description} keyword = {value.keyword} horns = {value.horns} />
        ))} 
      </main>
    )
  }
};

export default Main;