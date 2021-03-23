import "./header.css"
import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Welcome"
        };
    }
    change(){
        this.setState({
            text: "Very Welcome"
        });
    }
    render(){
        return <header onClick={this.change.bind(this)}>{this.state.text}</header>
    }
}
export default Header;