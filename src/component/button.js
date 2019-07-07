import React, { Component } from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    Handelclick =(val) =>{
this.props.valfunc(val);
 
    }
    render() { 
        return ( < >
            <button className="btn-primary" type="button" onClick={(e)=>{this.Handelclick(this.props.butval)}}>{this.props.butval}</button>

            </ > );
    }
}
 
export default Buttons;