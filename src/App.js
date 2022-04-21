import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import Songs from './pages/Songs';

//import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import Navbar from "./components/Navbar";
import NavbarTrack from "./components/NavbarTrack";

import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Tracks from "./components/Tracks";
 

import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Content, Sider, 
 // Footer 
} = Layout;
 

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
 

      <Routes>
           <Route path="/" element={(
                <>
               <Navbar/>
               <Hero/>
               <Cards/>
               <Tracks/>
               <Footer/>
               </>
               )} />
      </Routes>
  
      <Routes>
            <Route path="/album" element={(
                 <>
                 <Album setNftAlbum={setNftAlbum}/>
                 </>
                )} 
              />  
     </Routes>
  

    </>
  );
}


export default App;
