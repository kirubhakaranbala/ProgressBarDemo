import React, { Component } from 'react';
import Buttons from './button';
import Progress from './progress';
import {wht} from '../App.scss';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bar:this.props.bar,
            buttonRange:this.props.btn,
            value:'0'
         }
    }

    Valupdate =(vall) =>{
        

        const users = Object.assign([], this.state.bar);
    users[this.state.value] = this.state.bar[this.state.value]+vall;
    console.log(users[this.state.value]);
    if(users[this.state.value] >= 0)
    {
        this.setState( {
          bar:users
           
      });
    }else{
      alert("Error");
    }
    }

    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() { 

        var data= this.state.bar.map((item,i) =>{
            return   ( <div class="progress" data-width="100%"  key={i}>
            <div class={item>this.props.limit ? 'red' : 'blue'} data-name="HTML" style={{width:(item/this.props.limit*100)+'%',background:item == 0? 'transparent' :''}}></div>
           
            <div className="PVal" style={{color:item/this.props.limit*100 >48 ?wht : ''}}>{item}%</div>
        </div>);
          });
          
          var butdat= this.props.btn.map((item,i) =>{
            return  (<Buttons butval={item} valfunc={this.Valupdate} key={i}/>);
          });

          var Selclist= this.state.bar.map((item,i) =>{
            return   ( <option key={i} value={i}>ProgressBar {i+1}</option> );
          });
          
 

        return (
            <>
          <div className="panel-hdr" >
          <h2>Progress Bar Demo </h2>
          </div>

          <div className="ProgressSec">  
          {data}
          </div>

          <div className="ButtonSec"> 
          <div className="Slctgrp">
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          {Selclist}
          </select>
          </div>

          <div className="Btngrp">
          {butdat}
          </div>
          
          </div>
 </>
          );
    }
}
 
export default ProgressBar;