import React, { Component } from 'react'

class ButtonRando extends Component {
    state={num:0};//button is initally not clicked, so i save this info initially

    
    handleClick=(e)=>{//Arrow function, it automatically binds "this"
        this.setState({num:Math.floor(Math.random() * 10)}); //when clicked to the button, change state to clicked
    }
    render(){
    return (
        <div>
            <div className="parts"> 
                <h1>
                    Your Random Number is: {this.state.num}
                </h1>
                {
                    this.state.num===7?<h2>You Win</h2>: <button className="button-52" onClick={this.handleClick}>CLICK ME</button>
                }
                
               
            </div>
            
        </div>
    )
}
}
export default ButtonRando;
