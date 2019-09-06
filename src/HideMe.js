import React, { Component } from "react";

class HideMe extends Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false, }
        this.handleClick = this.handleClick.bind(this); 
    }
    
    handleClick() {
        let { clicked } =this.state;
        
        this.setState( 
            { clicked: !clicked }
        );
    }



    render () {
    let { clicked } =this.state;
      const styles = {
          display: clicked ? 'none' : 'visible', 
      }
        return (
            <div style={ styles } className='jumbotron'>
                <button className="btn btn-primary" onClick={ this.handleClick }>HideMe</button>
                <p>{ this.props.children }</p>
            </div>



        )

    }
}


export default HideMe;