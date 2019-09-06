import React, { Component } from "react";
import Form from'./Form';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts: [],
            }
            this.titleInput = this.handleInput.bind(this)
            this.textInput = this.handleInput.bind(this)  
    }
    setTitle(e, field) {
        this.setState(
            { [field]: e.currentTarget.value,
            });
    }
    handleUpdate(post) {
        let { posts } =this.state
        this.setState
    }
    


     render(){

        return(
            <>
            <h1>Posts</h1>
            { posts ==="" ?}
            <Form 
            title={ title } 
            text={ text }
            handleInput ={ (e) => this.setTitle(e, 'title')}
            
            />
            </>

        ) 
     
    }


}
export default Posts;