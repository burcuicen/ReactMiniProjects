import React, { Component } from 'react'

class ButtonGame extends Component {
    state={count:0};//button is initally not clicked, so i save this info initially

    
    handleClick=(e)=>{//Arrow function, it automatically binds "this"
        let c=this.state.count+1;
        this.setState({count:c}); //when clicked to the button, change state to clicked
    }
    
    render(){
    return (
        <div>
            <div className="parts"> 
                <h1>
                    Your Count is: {this.state.count}
                </h1>
                
                    
                 <button className="button-52" onClick={this.handleClick}>CLICK ME</button>
              
                
               
            </div>
            
        </div>
    )
}
}
export default ButtonGame;
