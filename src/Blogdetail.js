import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Button} from 'react-bootstrap';

 class Blogdetail extends Component {
componentDidMount(){
    this.loadArticle()
}
loadArticle=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.blogid}`)
    .then((resposne)=>{
        console.log(resposne.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
    render() {
        
        return (
            <div>
                <Button onClick={()=>{this.props.history.push("/")}}>Click me</Button>
            </div>
        )
    }
}

export default withRouter(Blogdetail);