import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Alert from './components/alert/Alert';
import Home from './pages/Home';
import About from './pages/About';
import PrivateRoute from './components/customRoutes/PrivateRoute';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Alert />
        <Header />
        <Switch>
          <Route path={'/login'} component={Login} />
          <Route path={'/about'} component={About} />
          <PrivateRoute path="/product" component={Product} />
          <Route path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
