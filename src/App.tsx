import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [isLoaded,setisLoaded]=useState(false);
  const onLoad=(()=>{
    setisLoaded(true);
  });
  useEffect(()=>{
    if(document.readyState=="complete"){
      setisLoaded(true);
    }else {
      window.addEventListener("load",onLoad);
      return (): void => {
        window.removeEventListener("load",onLoad);
      }
    }
  });
  return (
    <div className="App">
      <div className={"loading"+(isLoaded?" inactive":" active")}>
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
