import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import RegisterPage from './screens/RegisterPage';

function App() {
  return (
    <div className="App">
      <Header />
      <RegisterPage />
    </div>
  );
}

export default App;
