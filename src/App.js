
import React, { useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState]=useState([{}])
  useEffect(()=>{
    async function fetchData(){
    let response = await fetch("https://randomuser.me/api/?results=10")
    let body = await response.json()
    console.log(body.results)
    setState(body.results)
    console.log("IT IS EFFECTIVE")
    }
    fetchData()
  }, [])
 
  function sortIt(){
    console.log("click detected")
    let dontMessWithState = [...state];
    console.log(dontMessWithState)
    dontMessWithState.sort((a,b)=>{ a.name.first.localeCompare(b.name.first)
    
      console.log( a.name.first < b.name.first)
      return a.name.first < b.name.first?-1:1}
    )
    setState(dontMessWithState)
    console.log(dontMessWithState)
    //.sort
  }
function filterIt() {
  console.log("click detected")
  let dontMessWithState = [...state];
  console.log(dontMessWithState)
  const filterReturns=dontMessWithState.filter((a)=>{ 
    console.log(a)
  
    return a.gender === "female"
  })
  setState(filterReturns)
  console.log(filterReturns)

}
  
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click <code onClick={()=>sortIt()}>Alpohabetize</code> to alphabetize
          
        </p>
        <button onClick ={()=>filterIt()}>just ladies</button>
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
