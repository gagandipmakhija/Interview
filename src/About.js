import React from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';

class About extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.loadArticle()
    }
    loadArticle = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data)
                this.setState({ data: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (<div>
{this.state.data.map((item)=>{
    return(<Card key={item.id}>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>{item.username}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>)
})}
        </div>)
    }
}
export default About;