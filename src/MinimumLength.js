import React, { Component } from "react";

class MinimumLength extends Component {

        constructor(props) {
            super(props);
            this.state ={
                input: "",
            }
            this.handleInput = this.handleInput.bind(this);
        }

        handleInput(e) {
            this.setState(
                {input: e.currentTarget.value}
            )
        }
        
        render() {
            let { input } =this.state;
            let { length } = this.props;
            return (
                <form className="jumbotron">
                    <label>Minimum Length</label>
                    <input className="form-control" type='text' onChange={ this.handleInput } value={ input }/>
                    <p>{ input.length > length ? "Success!" : "Too Short!" }</p>
                </form>
            )
        }

}
export default MinimumLength
