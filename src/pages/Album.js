import React, { useState, useEffect, useRef } from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom'

import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import Audio from "../components/AudioPlayer";
import AudioPlayer from "../components/AudioPlayer";
import { useIPFS } from "../hooks/useIPFS";
import useAudio from "../hooks/useAudio";
import { library } from "../helpers/albumList";




const Album = ({ setNftAlbum  }) => {
  const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);

  return (
    <>



          <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <a >
                                      <Link to="/"> 
                                        <img src="img/logo.png" alt=""/>
                                        </Link>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a class="active" href="index.html">home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="track.html">tracks</a></li>
                                            <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                       
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="social_icon text-right">
                                    <ul>
                                        <li><a href="#"> <i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="#"> <i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="#"> <i class="fa fa-instagram"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
 


     <div class="bradcam_area breadcam_bg_2">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bradcam_text text-center">
                        <h3>My Tracks</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <a >
                                       <Link to="/"> 
                                           <img src="img/logo.png" alt=""/>
                                        </Link>
                                     </a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a class="active" href="index.html">home</a></li>
                                            <li><a href="about.html">About</a></li>
                                             <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div class="social_icon text-right">
                                    <ul>
                                        <li><a href="#"> <i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="#"> <i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="#"> <i class="fa fa-instagram"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>







     <div class="music_area music_gallery">
        <div class="container">
                <div class="row">
                        <div class="col-xl-12">
                            <div class="section_title text-center mb-65">
                                <h3>Latest Tracks</h3>
                            </div>
                        </div>
                    </div>
  
      
            <div class="row align-items-center justify-content-center mb-20">
               
            <div class="col-xl-10">
                    <div class="row align-items-center">
                                <div class="col-xl-9 col-md-9">
                                    <div class="music_field">
                                            <div class="thumb">
                                                    <img src={albumDetails.image} alt=""/>
                                                </div>
                                                <div class="audio_name">
                                                    <div class="name">
                                                        <h3>{albumDetails.title}</h3>
                                                        <p>10 November, 2019</p>
                                                    </div>
                                                        <audio preload="auto" controls>
                                                                <source src="https://gateway.moralisipfs.com/ipfs/QmQkk4F7HawRtsh63Ch2W6WotpDgmJCf19fguHst1mmfaw/media/0"/>
                                                         </audio>
                                                </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-3">
                                    <div class="music_btn">
                                            <a class="boxed-btn"
                                             onClick={() =>
                                              window.open(
                                                `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
                                              )
                                            }
                                            >
                                            OpenSea
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>






                         <div class="col-xl-10">
                    <div class="row align-items-center">
                                <div class="col-xl-9 col-md-9">
                                    <div class="music_field">
                                            <div class="thumb">
                                               <img src={albumDetails.image}  alt=""/>
                                                </div>
                                                <div class="audio_name">
                                                    <div class="name">
                                                        <h3>{albumDetails.title}</h3>
                                                        <p>10 November, 2019</p>
                                                    </div>
                                                        <audio preload="auto" controls>
                                                                <source src="https://gateway.moralisipfs.com/ipfs/QmQkk4F7HawRtsh63Ch2W6WotpDgmJCf19fguHst1mmfaw/media/1"/>
                                                            </audio>
                                                </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-3">
                                    <div class="music_btn">
                                            <a class="boxed-btn"
                                             onClick={() =>
                                              window.open(
                                                `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/2`
                                              )
                                            }
                                            >
                                            OpenSea
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>
        </div>
    </div>
    </>
  );
};

export default Album;
