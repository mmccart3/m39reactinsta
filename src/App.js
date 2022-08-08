import {useState,useEffect} from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import './App.css';
import Box from './box'
import Other from './Other'


function App() {
  const [user, setUser] = useState("John");
  const [age, setAge] = useState("55");
  const [character, setCharacter] = useState ("Goody");
  const [tmpUser, setTmpUser] = useState();
  const [myPics, setMyPics] = useState([]);
  const changeUser = (myName,fred) => {fred(myName)};
  const [displayImages, setDisplay] = useState(false);
 
  const myArray = [{name:"Fred"}, {name:"George"}, {name:"Harry"}, {name:"Ginny"}];
  
  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)
    console.log(data)
  }

  useEffect(()=> {
    fetchPics();
    console.log(myPics)
  },[])
  // for (let i = 0; i < myArray.length; i++)
  // {
  //   console.log(myArray[i].name);
  // }

  // myArray.map((item, index) => {
  //   console.log(item.name, index)
  // })

  return (
    <div className="App">
        <button onClick={(event) => setDisplay(!displayImages)}>Click Me On</button>
        {/* <button onClick={(event) => setDisplay(false)}>Click Me Off</button> */}
      {displayImages &&
      myPics.map((item,index) => {
        return (
          <div>
          <h2>{item.author}</h2>
          <img src={item.download_url} />
          
          </div>
        )
      })}





      {/* <h1>Fred</h1>
      <h1>George</h1>
      <Other /> */}

      {/* <Box personsname={user} age={age} character={character} />
      <br></br>
      <input onChange={(event) => changeUser(event.target.value,setTmpUser)} />

      <br></br>
      <input onChange={(event) => setAge(event.target.value)} />
      <br></br>
      <input onChange={(event) => setCharacter(event.target.value)} />
      <br></br>
      <button onClick={(event) => setUser(tmpUser)}>Click Me</button>

      {user && <Box personsname={user} age={age} character={character}/>} 
      {user ? <div><Other /><h1>user logged in</h1></div> : <h1>user not logged in </h1>} */}

    </div>
  );
}

export default App;
