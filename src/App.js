import logo from './logo.svg';
import './App.css';

import { NavBar }   from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { Beers } from './components/Beers';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Routing</h1>
      </header>
      <NavBar/>
      <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/users' element={ <Users />}></Route>
          <Route path='/beers' element={ <Beers />}></Route>
          <Route path='*' element={ <NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
