import React from "react";


class Footer extends React.Component {

  constructor(props) {
    console.log(props.title);
    super(props);
  }

  render() {
    return (
      <footer>
        Author: Timothee Odushina
      </footer>
    )
  }
};

export default Footer;