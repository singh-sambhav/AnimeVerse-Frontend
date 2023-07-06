// import React, { PureComponent } from 'react'
import pokemon from '../../Pics/pokemonpaldea.png';
import demon from '../../Pics/demonslayer.jpg';
import naruto from '../../Pics/naruto.jpg';
import bayblade from '../../Pics/bayblade.jpg';
import pokemonlogo from '../../Pics/pokemonlogo.png';
import demonlogo from '../../Pics/demonlogo.png';
import narutologo from '../../Pics/narutologo.png';
import baybladelogo from '../../Pics/baybladelogo.png';
import "./slider.scss";
// import {PlayArrow} from "@material-ui/icons"
// import { InfoOutlined } from "@material-ui/icons"


// import React, { useState } from 'react';

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="coro-button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className={activeIndex === 0 ? "active" : ""}
//             aria-current={activeIndex === 0 ? "true" : "false"}
//             aria-label="Slide 1"
//             onClick={() => handleSlideChange(0)}
//           ></button>
//           <button
//             type="coro-button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             className={activeIndex === 1 ? "active" : ""}
//             aria-current={activeIndex === 1 ? "true" : "false"}
//             aria-label="Slide 2"
//             onClick={() => handleSlideChange(1)}
//           ></button>
//           <button
//             type="coro-button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             className={activeIndex === 2 ? "active" : ""}
//             aria-current={activeIndex === 2 ? "true" : "false"}
//             aria-label="Slide 3"
//             onClick={() => handleSlideChange(2)}
//           ></button>
//           <button
//             type="coro-button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="3"
//             className={activeIndex === 3 ? "active" : ""}
//             aria-current={activeIndex === 3 ? "true" : "false"}
//             aria-label="Slide 4"
//             onClick={() => handleSlideChange(3)}
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
//             <div className="logo-overlay">
//               <img src={pokemonlogo} className="pokemon" alt="Logo 1" />
//             <div className="buttons">
//                 <button className="play">
//                 <PlayArrow />
//                 <span>Play</span>
//                 </button>
//                 <button className="info">
//                 <InfoOutlined />
//                 <span>Info</span>
//                 </button>
//             </div> 
//             </div>
//             <img src={pokemon} className="slides" alt="Slide 1" />
//           </div>
//           <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
//             <div className="logo-overlay">
//               <img src={demonlogo} className="demon" alt="Logo 2" />
//               <div className="buttons">
//                 <button className="play">
//                 <PlayArrow />
//                 <span>Play</span>
//                 </button>
//                 <button className="info">
//                 <InfoOutlined />
//                 <span>Info</span>
//                 </button>
//             </div> 
//             </div>
//             <img src={demon} className="slides" alt="Slide 2" />
//           </div>
//           <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
//             <div className="logo-overlay">
//               <img src={narutologo} className="naruto" alt="Logo 3" />
//               <div className="buttons">
//                 <button className="play">
//                 <PlayArrow />
//                 <span>Play</span>
//                 </button>
//                 <button className="info">
//                 <InfoOutlined />
//                 <span>Info</span>
//                 </button>
//             </div> 
//             </div>
//             <img src={naruto} className="slides" alt="Slide 3" />
//           </div>
//           <div className={activeIndex === 3 ? "carousel-item active" : "carousel-item"}>
//             <div className="logo-overlay">
//               <img src={baybladelogo} className="bayblade" alt="Logo 4" />
//               <div className="buttons">
//                 <button className="play">
//                 <PlayArrow />
//                 <span>Play</span>
//                 </button>
//                 <button className="info">
//                 <InfoOutlined />
//                 <span>Info</span>
//                 </button>
//             </div> 
//             </div>
//             <img src={bayblade} className="slides" alt="Slide 4" />
//           </div>
//         </div>
//         </div>
//         </div>
//   );
// };

// export default Slider;

import React, { useState } from 'react';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import './slider.scss';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleNextSlide = () => {
    const newIndex = (activeIndex + 1) % 4;
    setActiveIndex(newIndex);
  };

  const handlePreviousSlide = () => {
    const newIndex = activeIndex === 0 ? 3 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={activeIndex === index ? 'active' : ''}
              aria-current={activeIndex === index ? 'true' : 'false'}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {[
            { logo: pokemonlogo, image: pokemon, title: 'Pokemon' },
            { logo: demonlogo, image: demon, title: 'Demon Slayer' },
            { logo: narutologo, image: naruto, title: 'Naruto Shippuden' },
            { logo: baybladelogo, image: bayblade, title: 'Beyblade Burst' }
          ].map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="logo-overlay">
                <img src={item.logo} className="logo" alt={`Logo ${index + 1}`} />
                <div className="buttons">
                  <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                  </button>
                  <button className="info">
                    <InfoOutlined />
                    <span>Info</span>
                  </button>
                </div>
              </div>
              <img src={item.image} className="slide" alt={`Slide ${index + 1}`} />
              <div className="title">{item.title}</div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={handlePreviousSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={handleNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
