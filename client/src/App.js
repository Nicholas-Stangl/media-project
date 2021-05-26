// import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import {motion} from 'framer-motion'
import media from './images/media.png'
import AllMedia from './components/AllMedia';
import OneItem from './components/OneItem';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import styled from 'styled-components'


function App() {
  const Image = styled.img`
    height: 100px;
    width: 100px;
    margin: 20px;
  `
  return (
    <div className="App">
      <Router>
        <AllMedia path="/"></AllMedia>
        <OneItem path="/detail/:itemId"></OneItem>
        <CreateItem path="/create"></CreateItem>
        <EditItem path="/edit/:itemId"></EditItem>
      </Router>
      <motion.div whileHover={{scale:1.1}}>
      <Image src={media} alt="tv"/>
      </motion.div>
    </div>
  );
}

export default App;
