import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './App.css';

import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import CallForEnquiry from './CallForEnquiry';

import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/products"  component={Products} />
        <Route exact path="/services"  component={Services} />
        <Route exact path="/contact"  component={Contact} />
        <Redirect to="/" />
      </Switch>
      <CallForEnquiry />
      <div class="whatsApp">
        <a href="https://api.whatsapp.com/send?phone=918521169373" >
          <i class="fab fa-whatsapp-square fa-2x"></i>
        </a>
      </div>
      <div class="phone">
        <a href="tel:918521169373" >
        <i class="fas fa-phone-square fa-2x"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
