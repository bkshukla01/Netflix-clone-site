import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Header from './Header';

function App() {
  return (
    <Router>
    <Header/>
    <Home/>
      <Routes>
    <Route path="/" element={<Home/>} />


      </Routes>
    </Router>
  );
}

export default App;
