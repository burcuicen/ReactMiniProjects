import React, { Component } from 'react'

class Button extends Component {
    //there are 2 methods to use this function 
    /*######################################VERSION-1######################################
    constructor (props) {
        super(props);
        state={clicked:false};
        this.handleClick=this.handleClick.bind(this);}//for react to recognize this keyword we need to use the bind method in case of any error
         handleClick(e){
        this.setState({clicked:true});//when clicked to the button, change state to clicked
    }
        */
        //Then the simpler version
        //######################################VERSION-2######################################
        state={clicked:false};//button is initally not clicked, so i save this info initially

    
    handleClick=(e)=>{//Arrow function, it automatically binds "this"
        this.setState({clicked:true}); //when clicked to the button, change state to clicked

    }
    render(){
    return (
        <div>
            <div className="parts"> 
                <h1>
                    {this.state.clicked?"Done":"Click the button below"}
                </h1>
                <button className="button-52" onClick={this.handleClick}>CLICK ME</button>
            </div>
            
        </div>
    )
}
}
export default Button;
