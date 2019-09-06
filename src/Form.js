import React, { Component } from 'React'

class Form extends Component

constructor(props) {
    super(props);
    this.state = {
        title:"",
        text:"",
    };
    this.titleInput = this.titleInput.bind(this);
    this.textInput = this.textInput.bind(this);
}

titleInput(e) {
    let { title } =this.state.title;
    let inputElement = e.currentTarget // the element you added the event handler to
     
    this.setState (
        {
            title: inputElement.value, // OR SHORTHAND: input: e.currentTarget.value
        }
    );
}

titleInput(e) {
    let { text } =this.state.title;
    let inputElement = e.currentTarget // the element you added the event handler to
     
    this.setState (
        {
            text: inputElement.value, // OR SHORTHAND: input: e.currentTarget.value
        }
    );
}


handleSubmit() {
    e.preventDefault();
    let { handleUpdate } =this.props;
    let { title, text } =this.state;
    handleUpdate( { title: title, text: text });
    
    this.setState({ title:"", text:"", saved: true})
}
render() {

    return (
        <form onSubmit={ this.handleSubmit }>
            <label>Title</label>
            <input onChange={ this.handleTitle } value={ title }></input>

            <label>Text</label>
            <input value={ text }></input>

            <input  onChange={ this.handleText } onClick={ submitPost }type="submit"></input>
        </form>

    )
}





export default Form;