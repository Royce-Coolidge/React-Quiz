import React, { Component } from "react";

class EvenClick extends Component {

    constructor(props) {
        super(props);
        this.state = { clicker: 0, } 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        let { clicker } =this.state;
        this.setState( { clicker: clicker + 1, }
        );
    }



    render() {
        let { clicker } =this.state;
        return (
    <div className="jumbotron">
        <h2>EvenClick</h2>
        <button className="btn btn-primary" onClick={ this.handleClick }>EvenClick</button>
        <p>{ clicker % 2 === 0 ? "Even" : "Odd" }</p>
    </div>
    )
    }
}

export default EvenClick