
import './App.css';
import Error  from './components/Error';
import Testone from './components/Testone';
import Testtwo from './components/Testtwo';
import Testthree from './components/Testthree';

function App() {
  return (
    <div className="App">
      <Error><Testone/></Error>
      <Error><Testtwo/></Error>
      <Error><Testthree/></Error>
    </div>
  );
}

export default App;
