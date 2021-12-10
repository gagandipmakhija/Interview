import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import About from './About';
import Blogdetail from './Blogdetail';
import Contact from './Contact';

class App extends React.Component{
  render(){
    return(<div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/"><About/></Route>
        <Route exact path="/contact"><Contact/></Route>
        <Route exact path="/blog/:id"><Blogdetail/></Route>
        <Route exact apth="*"><div>404 not found</div></Route>
        </Switch>
        </BrowserRouter>
    </div>)
  }
}

export default App;
