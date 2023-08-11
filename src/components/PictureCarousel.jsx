import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture1 from "../assets/ottawa1.jpg";
import picture2 from "../assets/parliament1.jpg";
import picture3 from "../assets/guard1.jpg";


class PictureCarousel extends Component {
    render() {

        var settings = {
            infiniteLoop:true,
            showThumbs:false
          };
        return (
            
            <Carousel  {...settings} className="min-h-[20vh] ">
                <div>
                    <img src={picture1} />
                    <p className="Ottawa">Ottawa</p>
                </div>
                <div>
                    <img src={picture2} />
                    <p className="Parliement">Parliament</p>
                </div>
                <div>
                    <img src={picture3} />
                    <p className="Royal guard">Royal guard</p>
                </div>
            </Carousel>
        );
    }
};
