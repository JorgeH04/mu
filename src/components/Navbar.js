import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class Navbar extends Component {
    render() {
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
                                            <li>
                                                <a class="active">
                                                  <Link to="/"> 
                                                        Home
                                                  </Link>
                                                </a>
                                            </li>
                                             <li><a>About</a></li>
                                             <li><a>Tracks <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a>track 1</a></li>
                                                    <li><a>track 2</a></li>
                                                </ul>
                                            </li>
                                        
                                            <li><a>Contact</a></li>
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
</>
        )
    }
}


