import './App.css';
import Home from './screens/Home';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import Header from "./components/header";
import TemporaryDrawer from "./components/sidenav";
import Services from './screens/Services';
import Packages from './screens/Packages';
import Gamelist from './screens/Gamelist';
import Contact from './screens/Contact';
import EInvites from './screens/E-Invites';
import AboutUs from './screens/AboutUs';
import './assets/css/global.css';
import PageProgress from './components/PageProgress';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
        <Header drawerfunc={setDrawerOpen} />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/packages' element={<Packages />} />
          <Route exact path='/services' element={<Services />}/>
          <Route exact path='/gamelist' element={<Gamelist />} />
          <Route exact path='/contactus' element={<Contact />} />
          <Route exact path='/about' element={<AboutUs />} />
          {/* <Route exact path='/e-invites' element={<EInvites />} /> */}
          {/* <Route exact path='/e-invites' element={<PageProgress type={"Page"} />} /> */}
        </Routes>
      <TemporaryDrawer drawerstate={drawerOpen} drawerfunc={setDrawerOpen} />
    </Router>
  )
}

export default App;
