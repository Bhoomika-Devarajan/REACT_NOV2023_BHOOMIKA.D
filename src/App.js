import logo from './logo.svg';
import './App.css';
import Get from "./components/Get";
import Post from "./components/Post";
import Put from "./components/Put";
import Delete from "./components/Put";
function App() {
  return (
    <div className="App">
      <Get />
      <Post />
      <Put />
      <Delete/>
    </div>
  );
}

export default App;
