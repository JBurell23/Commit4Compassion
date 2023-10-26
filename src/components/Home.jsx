import React from 'react'
import Navbar from "./Navbar";
import Body from "./body";
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className = "home-container">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
    </>
  )
}

export default Home