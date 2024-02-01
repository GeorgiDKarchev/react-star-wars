
import './App.css';
import Ship from "./components/Ship";
import {useState,useEffect} from "react";

function App() {
  const[ships, setShips] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        const res = await fetch ("https:swapi.dev/api/starships");
        const data= await res.json();
        console.log(data.results[0].name);
        setShips(data.results);
    };
    fetchData()

},[]);
  return (
    <div className="App">
      <h1>Star Wars App</h1>
      {ships.map((ship)=>{
        return(
          <Ship ship={ship}/>
        )
      })}
    </div>
  );
}

export default App;
