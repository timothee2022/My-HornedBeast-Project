import React from "react";

class HornedBeast extends React.Component {


    constructor(props) {
      console.log(props.title);
      super(props);
    }
  
    render() {
      return (
        <hornedBeast>
          <h2>{this.props.title1}</h2>
          <p>The Nubian ibex’s gigantic, backward-curling horns are even more impressive when you consider that the ibex uses them to smash into male competitors while on top of scary mountains in North Africa and Arabia. There are a few different types of ibex and nobody’s quite sure whether they’re the same species or not, so please, alpine ibex fans, don’t be upset that the Nubian variety is up here instead.</p>
          <img src={img1} alt="Nubian Ibex" />
  
          <h2>{this.props.title2}</h2>
          <p>The mouflon is thought to be the ancestor of our modern, very familiar domestic sheep. Sometime during the domestication process the mouflon lost its absolutely stupendous horns, great tough curving loops that make you wonder why “sheep” could ever have meek connotations.</p>
          <img src={img2} alt="Nubian Ibex" />
        </hornedBeast>
      )
    }
  };
  
  export default Main;