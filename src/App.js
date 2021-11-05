
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/Search';

import Home from './components/Home';

function App() {


  return (

    <div className="App">

      <header className="App-header">

      <BrowserRouter>

      <h1 className="my-5">StarWars API</h1>

        <Search></Search>

        <Switch>

          <Route exact path = "/:category/:id">

            <Home></Home>

          </Route>

        </Switch>

  

    </BrowserRouter>

      </header>

    </div>

  );

}

export default App;
