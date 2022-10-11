import React from 'react';
import {withRouter} from 'react-router-dom';
const Navbar =(props)=>{
  /*
setTimeout(function() {
    props.history.push('/contact');
  },2000);
  */
  return (
  <nav class="red darken-3"> 
      <div class="nav-wrapper container"> 
      <a href="#" class="brand-logo">TAMDA</a> <ul class="right"> 
      <li>
      <a href="/">Home</a></li> 
      <li>
      <a href="/about">About</a>
      </li> 
      <li>
      <a href="/contact">Contact</a>
      </li> 
      </ul> 
      </div> 
  </nav>
    
    )
}
export default withRouter(Navbar)