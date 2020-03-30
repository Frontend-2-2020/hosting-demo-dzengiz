import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1536920958033-7c2cdc9a83c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
            alt="sc1"/>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1566996675874-f00a61522322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1328&q=80"
            alt="sc2"/>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1537215796692-c40fcda1283c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="sc3"/>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1570848719506-bf445e5ac3a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="sc4"/>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529220100082-80957b04a221?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
            alt="sc5"/>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1532272037986-b930d0b26075?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="sc6"/>
        </div>
      </Slider>
    </div>
  );
}

export default App;
