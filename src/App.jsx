import './App.css';
import Home from './screens/Home';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
