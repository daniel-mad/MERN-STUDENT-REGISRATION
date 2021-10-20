import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import RegisterLanding from './screens/RegisterLanding';
import RegisterPage from './screens/RegisterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={RegisterPage} />
          <Route exact path="/registered" component={RegisterLanding} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
