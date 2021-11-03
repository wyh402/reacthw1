import logo from './logo.svg';
import './App.css';
import Navigbar from './Components/Navigbar'
import Feed from './Components/Feed'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* Your Navigation Bar that you imported as component should be here, look at 
      how the Feed Component is imported as a reference point.
      Remember that React Components must start with a capital letter.*/}
      <h1>Blockstagram</h1>
      <Feed></Feed>
    </div>
  );
}

export default App;