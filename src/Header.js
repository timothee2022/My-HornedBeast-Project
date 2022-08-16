import React from "react";
// import Header from './Header.js'

class Header extends React.Component {

  constructor(props) {
    console.log(props.title);
    super(props);
  }

  render() {
    return (
      <header>
        <h1>HornedBeast</h1>
      </header>
    )
  }
};

export default Header;

