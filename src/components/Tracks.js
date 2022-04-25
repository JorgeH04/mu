import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from "../helpers/albumList";
 
export default class Tracks extends Component {
    render() {
        return (
<>

    <div class="youtube_video_area">
        <div class="container-fluid p-0">
            <div class="row no-gutters">


          
          {library.map((e) => (
               <div class="col-xl-3 col-lg-3 col-md-6">
                                          <Link to="/album" state={e} >

                    <div class="single_video">
                        <div class="thumb">
                            <img src={e.image} alt=""/>

                        </div>
                        <div class="hover_elements">
                            <div class="hover_inner">
                                <span>New York Show-2018</span>
                                <h3><a href="#">{e.title}</a></h3>
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>
                          
            ))}

 
            </div>
        </div>
    </div>
</>


        )
    }
}



