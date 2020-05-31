import React from 'react';
import logo from './logo.svg';
import './App.css';
import docker from './assets/docker.png';

function App() {
  return (    
    <div className="main">
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">DOCKER MAN</a>
  </nav>
  <div style={{display:'flex',justifyContent:'center',flexDirection:'column', alignItems:'center'}}>
  <h1 style={{color:'blue'}}>Docker man -React App </h1>
  <br/>
    <img style={{width:'576px'}} src={docker} />
  <h4 style={{margin:'15px'}}>For more information visit : <a href="https://docs.docker.com/">official docker documentation</a></h4>
  </div>
  </div>
  );
}

export default App;
