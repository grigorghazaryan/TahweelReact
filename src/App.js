import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
// import './App.css';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Button, Badge, Accordion, Card, Dropdown } from 'react-bootstrap';
// import { render } from '@testing-library/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Media from './components/pages/Media';
import Contact from './components/pages/Contact';
import Industrial from './components/pages/Industrial';
import Agriculture from './components/pages/Agriculture';
import Packaging from './components/pages/Packaging';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>

          

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/media">
              <Media/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>            
            <Route path="/industrial">
              <Industrial/>
            </Route>            
            <Route path="/agriculture">
              <Agriculture/>
            </Route>
            <Route path="/packaging">
              <Packaging/>
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>

          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
