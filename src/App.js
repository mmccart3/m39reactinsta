import {useState,useEffect} from 'react';
import './App.css';
import Box from './box'
import Other from './Other'


function App() {
  const [user, setUser] = useState("John");
  // const changeName = () => {
  //   setUser("Harry");
  // }
  // changeName();
  return (
    <div className="App">
      <h1>Alex</h1>
      <h1>Fred</h1>
      <h1>George</h1>
      <Other />
          <Box personsname="Sirius" age ="58" character="goody" />
      <Box personsname="Hagrid" age = "49" character="goody" />
      <Box personsname={user} age="70" character="baddie" />

    </div>
  );
}

export default App;
