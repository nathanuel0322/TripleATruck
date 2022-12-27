import './App.css';
import Home from './screens/Home';
import React, {useState} from 'react';
// import './assets/css/home.css';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import Header from "./components/header";
import TemporaryDrawer from "./components/sidenav";
// import Navbar from './components/global/Navbar';
// import Services from './screens/Services';
// import Gamelist from './screens/Gamelist';
// import Contact from './screens/Contact';
// import About from './screens/About';
// import BDayCard from './screens/BDayCard';
// import Packages from './screens/Packages';
// import HamburgerNav from './components/global/HamburgerNav';
import { useMediaQuery } from 'react-responsive';
import Packages from './screens/Packages';

function App() {
  const hamburgerdetector = useMediaQuery({query: '(max-width: 767px)'});
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
        {/* {hamburgerdetector ? <HamburgerNav /> : <Navbar />} */}
        <Header drawerfunc={setDrawerOpen} />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/packages' element={<Packages />} />
          {/* <Route exact path='/servicespage' element={<Services />}/>
          <Route exact path='/gamelistpage' element={<Gamelist />} />
          <Route exact path='/contactpage' element={<Contact />} />
          <Route exact path='/aboutpage' element={<About />} />
          <Route exact path='/BdayCard' element={<BDayCard />} /> */}
        </Routes>
      <TemporaryDrawer drawerstate={drawerOpen} drawerfunc={setDrawerOpen} />
    </Router>
  )
}

export default App;
