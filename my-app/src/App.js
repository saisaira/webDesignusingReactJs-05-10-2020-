import React from 'react';
import './App.css';
import Pra from './Practice';
import Array_data from './Array_data';

function App(props){
  var style={
    background:"#000",
    color:"#fff",
    textAlign:"center"
  }
  let array=["Sairam","swami","kalyan","mahalakshmi","Rajesh","Gayathri","SuryaNarayana"]
  let array1=["SriHarsha","thanuja","Nimmagadda SaiPriya","Kumaravelu s","Maniteja","sailakshmi","manikanta"]
  return(
    <div>
     {array.map((i,index)=>(

      <Array_data trainer={array[index]} student={array1[index]} key={index} />
      ))}










     {
      /*
      <App1 fname="Apssdc" lname="sdc" />
      <h1>Welcome To Function component</h1>
      */
      }
      {
    /*
    <Pra name="Ran" message="He is Good Boy" />
    */
  }

    </div>
    )  
}

{
  /*
class App1 extends React.Component{
  render(){
    return(
      <section className="welcome">
      <p>{this.props.fname}</p>
      <p>{this.props.lname}</p>
      <h1>Welcome Class component</h1>  
      </section>
      )
  }
}
*/
}
export default App;