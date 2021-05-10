import './App.css';

import { Route } from "react-router";
import Login from './components/Login'
import Main from './components/main'
import { BrowserRouter, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route 
        exact={true}
        path="/">
            <Login />
        </Route>
        <Route 
        exact={true}
        path="/main">
            <Main />
        </Route>    
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

