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
import { ApplianceDetail } from './components/ApplianceDetail';

function App() {
  
  // USERS DATA
  const USERS_URL = 'https://random-data-api.com/api/v2/users?size=20';
  const [ users, setUsers ] = useState([]);
  useEffect( () => {
    fetch(USERS_URL)
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setUsers(data)
        }
      )
      .catch(function(err){
       
      })
  }, [] );
  // APPLIANCES DATA
  const APPLIANCES_URL = 'https://random-data-api.com/api/v2/appliances?size=20';
  const [ appliances, setAppliances ] = useState([]);
  useEffect( () => {
    fetch(APPLIANCES_URL)
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setAppliances(data)
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
            <Route path='/index.html' element={ <Home />}></Route>
            
            <Route exact path='/users' element={ <Users users={users} />}>
              <Route path='/users/:id' element={ <UserDetail users={users} />} />
            </Route>
            <Route path='/appliances' element={ <Appliances appliances={appliances} />}>
              <Route path='/appliances/:id' element={ <ApplianceDetail appliances={appliances} />} />
            </Route>
            <Route path='/beers' element={ <Beers />}></Route>
            <Route path='*' element={ <NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;