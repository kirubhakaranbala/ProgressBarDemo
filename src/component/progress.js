import React, { Component } from 'react';
 class Progress extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             bars:this.props.bar
          }
     }
     render() { 
         
         return ( 
           <div class="progress" data-width="90%"  >
            <div class="html" data-name="HTML" style={{width:this.state.bars}}>{this.state.bars}</div>
        </div>

          );
     }
 }
  
 export default Progress;


 