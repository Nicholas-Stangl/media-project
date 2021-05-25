// import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import AllMedia from './components/AllMedia';
import OneItem from './components/OneItem';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';


function App() {
  return (
    <div className="App">
      <Router>
        <AllMedia path="/"></AllMedia>
        <OneItem path="/detail/:itemId"></OneItem>
        <CreateItem path="/create"></CreateItem>
        <EditItem path="/edit/:itemId"></EditItem>
      </Router>
    </div>
  );
}

export default App;
