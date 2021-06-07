import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Fav from './components/Fav'
import About from './components/About'

function App() {
  return (
    <Router>
      <div>
        <nav>
        <h1>Hola a todos 👋 </h1>
          <ul className="header">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Información</Link>
            </li>
            <li>
              <Link to="/fav">Lista</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch className="content">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fav">
            <Fav />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;