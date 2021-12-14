import React from 'react';
//import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Home1 from './components/pages/Home1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services1 from './components/pages/Services1';
import About1 from './components/pages/About1';
import About from './components/pages/About';
import Register from './components/pages/register';
import Login from './components/pages/login';
import Homepage from './components/pages/homepage';
//import Footer from './components/Footer';
import { useState } from 'react';  
import Feedback from './components/pages/feedback';
import Freelance from './components/pages/Freelance';

function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}>
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path='/homepage' component={Homepage}>
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path='/home1' component={Home1}/>
          <Route path='/services1' component={Services1}/>
          <Route path='/about1' component={About1}/>
          <Route path='/feedback' component={Feedback}/>
          <Route path='/freelance' component={Freelance}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
