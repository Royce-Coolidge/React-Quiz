import React, { Component } from "react";

class CountBy extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0, } 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        let { counter } =this.state;
        let { step } =this.props
        this.setState( { counter: counter + step, });
    }



    render() {
        let { counter } =this.state;
        return (
            <div className="jumbotron">
                <h2>StepCounter</h2>
                <button className="btn btn-primary danger" onClick={ this.handleClick }>Step</button>
                <p>{ counter }</p>
            </div>
        )
    }
}

export default CountBy