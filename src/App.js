import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ProgressBar from './component/progressbar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      

     }
  }


  fetchingDatachart=()=>{
  fetch('http://pb-api.herokuapp.com/bars')
  .then((resp) => resp.json())
  .then((data) =>
  {  this.setState({data});
  })
   

}
  
 

componentDidMount() {
  this.fetchingDatachart();
}
 


 
  render() {  
    
    var sta= this.state.data || null;
    if(sta)
    {
      var data= this.state.data.bars.map((item,i) =>{
        return <ProgressBar key={i} val={item }   btn={sta.buttons[0] }/>;
      })

      return ( 
    
        <div className="App">  
       <section>
       <ProgressBar bar={sta.bars} btn={sta.buttons} limit={sta.limit}/>         
       </section>
        </div> );
    }else{
     return(
      <p>Loading...</p>
     );
    }
   
  }
}
 
export default App;
 
