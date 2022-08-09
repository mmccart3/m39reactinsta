import {useState,useEffect} from 'react';
import SignupOrLogin from './components/signupOrLogin'
import './App.css';


function App() {
  const [user, setUser] = useState();
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);
 
  
  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)
  }

  useEffect(()=> {
    fetchPics();
  },[myPics])

  return (
    <div className="App">
      <SignupOrLogin setter={setUser}/>
      <br></br>
      {user ? <h1>{user} logged in </h1>: <h1>not logged in</h1>}
      <br></br>
        <button onClick={(event) => setDisplay(!displayImages)}>Click Me On</button>
      {displayImages &&
      myPics.map((item,index) => {
        return (
          <div>
          <h2>{item.author}</h2>
          <img src={item.download_url} alt="A picture from Lorem Picsum" />
          
          </div>
        )
      })}


    </div>
  );
}

export default App;
