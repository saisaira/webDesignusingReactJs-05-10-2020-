import React,{useState} from 'react';

function HookCounter(){
	let initialCount=0
	let [count,setcount]=useState(initialCount)
	return(
		<div className="welcome">
           count: {count}

           <button onClick={()=>setcount(initialCount)}>Reset</button>
           <button onClick={()=>setcount(count+1)}>Increment</button>
           <button onClick={()=>setcount(count-1)}>Decriment</button>
		</div>

		)
}

export default HookCounter;