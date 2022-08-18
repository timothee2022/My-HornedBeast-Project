import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import Data from './data.json'
import SelectedBeast from './SelectedBeast.js';










function App() {

  return (
    <div>
      <Header />
      <Main
        // title1="Nubian Ibex"
        // title2="Mouflon"
      />
      <Footer />
      <SelectedBeast />
    </div>

  );
}

export default App;
