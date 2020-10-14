import React, { useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState]=useState([{}])
  useEffect(()=>{
    async function fetchData(){
    let response = await fetch("https://randomuser.me/api/?results=10")
    let body = await response.json()
    console.log(body)
    setState(body.results)
    console.log("IT IS EFFECTIVE")
    }
    fetchData()
  }, [])
  function sortIt(){
    console.log("click detected")
    let dontMessWithState = [...state]
    dontMessWithState.sort((a,b)=>{
     
      console.log( a.name.first < b.name.first)
      return a.name.first < b.name.first}
      )
    setState(dontMessWithState)
    //.sort
  }
  function filterIt(){
    //.filter
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code onClick={()=>sortIt()}>src/App.js</code> and save to reload.
        </p>
        {state.map((person, index)=>(
          <h1 key={index}>{person?.name?.first}</h1>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
