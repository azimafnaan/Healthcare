import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';

function App () {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId">
            <Details></Details>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;


//https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-azimafnaan