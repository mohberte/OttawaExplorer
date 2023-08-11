import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import picture1 from "../assets/ottawa2.jpg";
import picture2 from "../assets/ottawa3.jpg";
import picture3 from "../assets/park.jpg";
import picture4 from "../assets/river.jpg";
import picture5 from "../assets/museum.jpg";



class DiscoveryCarousel extends Component {
    render() {

        var settings = {
            infiniteLoop:true
          };
        return (
            
            <Carousel  {...settings} className="w-full  min-h-[30vh] mb-5 p-16 md:p-[6rem]">
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
                <div>
                    <img src={picture4} />
                    <p className="Royal guard">Royal guard</p>
                </div>
                <div>
                    <img src={picture5} />
                    <p className="Royal guard">Royal guard</p>
                </div>
            </Carousel>
        );
    }
};

export default DiscoveryCarousel;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>