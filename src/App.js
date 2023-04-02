import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import { NavBar }   from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { Beers } from './components/Beers';
import { NotFound } from './components/NotFound';
import { Appliances } from './components/Appliances';
import { UserDetail } from './components/UserDetail';

function App() {
  
  const DATA_USERS_URL = 'https://random-data-api.com/api/v2/users?size=5';

  const [ users, setUsers ] = useState([]);

  useEffect( () => {
    fetch(DATA_USERS_URL)
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setUsers(data)
          console.log(data);
        }
      )
      .catch(function(err){
       
      })
  }, [] );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Routing</h1>
      </header>
      <NavBar/>
      <main className="main">
        <Routes>
            <Route path='/' element={ <Home />}></Route>
            
            <Route exact path='/users' element={ <Users users={users} />}>
              <Route path='/users/:id' element={ <UserDetail users={users} />} />
            </Route>
            
            <Route path='/appliances' element={ <Appliances />}></Route>
            <Route path='/beers' element={ <Beers />}></Route>
            <Route path='*' element={ <NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;