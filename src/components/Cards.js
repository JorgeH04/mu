import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class Cards extends Component {
    render() {
        return (
<>

    <div class="music_area">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-10">
                    <div class="row align-items-center">
                                <div class="col-xl-9 col-md-9">
                                    <div class="music_field">
                                            <div class="thumb">
                                                    <img src="img/music_man/1.png" alt=""/>
                                                </div>
                                                <div class="audio_name">
                                                    <div class="name">
                                                        <h4>Frando Kally</h4>
                                                        <p>10 November, 2019</p>
                                                    </div>
                                                        <audio preload="auto" controls>
                                                                <source src="https://www.w3schools.com/html/horse.mp3"/>
                                                            </audio>
                                                </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-3">
                                    <div class="music_btn">
                                            <a href="#" class="boxed-btn">buy albam</a>
                                    </div>
                                </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
 
     <div class="about_area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="about_thumb">
                        <img class="img-fluid" src="img/about/about_1.png" alt=""/>
                    </div>
                </div>
                <div class="col-xl-7 col-md-6">
                    <div class="about_info">
                        <h3>Jack Kalib</h3>
                        <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression enim ad minim veniam quis nostrud exercitation we have supported programmes to help alleviate human suffering through animal welfare when people might depend.</p>
                        <div class="signature">
                            <img src="img/about/signature.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>


        )
    }
}


