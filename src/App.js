import React from "react";
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import Data from './data.json'
import SelectedBeast from './SelectedBeast.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: ""
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleOpen = (name) => {
    this.setState({ show: true, name: name })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          // title1="Nubian Ibex"
          // title2="Mouflon"
          data={Data}
          handleOpen={this.handleOpen}
        />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          name={this.state.name}
          handleClose={this.handleClose}
        />
      </div >

    );
  }
}

export default App;
