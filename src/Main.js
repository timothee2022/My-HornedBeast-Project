import React from "react";
import img1 from './img/image1.jpg'
import img2 from './img/image2.jpg'
import HornedBeast from './HornedBeast'


class Main extends React.Component {

  constructor(props) {
    console.log(props.title);
    super(props);
  }

  render() {
    return (
      <main>
        <HornedBeast title='firt Horned'
          imgSrc={img1} altTxt='first Horned'
          imgTitle='first horned' description='my first example of horned' />



        <HornedBeast title='second Horned'
          imgSrc={img2} altTxt='second Horned'
          imgTitle='second horned' description='my second example of horned' />
        
      </main>
    )
  }
};

export default Main;