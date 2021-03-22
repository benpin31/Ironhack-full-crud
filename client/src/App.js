import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from "react-router-dom"

import NotFound from './views/NotFound'
import Home from './views/Home'
import AllBooks from './views/AllBooks';
import OneBook from './views/OneBook';
import CreateBook from './views/CreateBook';
import UpdateBook from './views/UpdateBook';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/books/list" component={AllBooks}/>
        <Route exact path="/books/create" component={CreateBook}/>
        <Route exact path="/books/:id" component={OneBook}/>
        <Route exact path ="/books/update/:id" component={UpdateBook}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
