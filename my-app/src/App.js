import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import Data from './data/data.json';
import Pra from './Practice';
import Array_data from './Array_data';
import Profile from './Profile';

function App(props){  
  return(
    <BrowserRouter>
    <Route exact path='/Profile' component={Profile} />
    <Route exact path='/' component={Home} />
    <Route exact path='/abc' component={Array_data} />
    </BrowserRouter>
   
)
}
let Home=()=>{
  var info=Data.profiles;
  return(
   <div className="parent">
    {info.map((i,index)=>(
       <div key={index} className="child">
       <h1>{i.name}</h1>
       <h1>{i.email}</h1>
       <h1>{i.role}</h1>
       <Link to={{pathname:'/Profile',data:{id:index}}}>View Profile</Link>
       </div>
      ))}   
     
</div>
   
    )
}
export default App;