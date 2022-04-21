import React, { useState, useEffect, useRef } from "react";
import {Slider} from "antd";
import { useIPFS } from "../hooks/useIPFS";
import useAudio from "../hooks/useAudio";

import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";


const AudioPlayer = ({ url }) => {
  const {resolveLink} = useIPFS();
  const [
    playing,
    duration,
    toggle,
    toNextTrack,
    toPrevTrack,
    trackProgress,
    onSearch,
    onSearchEnd,
    onVolume,
    trackIndex
  ] = useAudio(url);

  
  
  const minSec = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMin}:${returnSec}`;
  };

  return (
    <>





 


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
                                                    <img src="img/music_man/3.png" alt=""/>
                                                </div>
                                                <div class="audio_name">
                                                    <div class="name">
                                                        <h4></h4>
                                                        <p>10 November, 2019</p>
                                                    </div>
                                                        <audio preload="auto" controls>
                                                                <source src="https://gateway.moralisipfs.com/ipfs/QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/0"/>
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
 
    </>
  );
};

export default AudioPlayer;
