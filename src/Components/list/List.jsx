import { useState, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import ListItem from "../listItem/listItem";
import "./list.scss";

export default function List({ listTitle }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef(null);
  const slideWidth = 230; // Width of each slide

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    const slideWidth = 200; // Width of each slide
    const gapWidth = 30; // Gap between slides
  
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
      listRef.current.style.transform = `translateX(${(slideWidth + gapWidth) * (slideNumber - 1) + distance}px)`;
    }
  
    if (direction === "right" && slideNumber < 9) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
      listRef.current.style.transform = `translateX(${-(slideWidth + gapWidth) * (slideNumber + 1) + distance}px)`;
    }
  };
  
  

  const transformValue = `translateX(${-slideWidth * slideNumber}px)`;

    return (
      <div className="list">
        <span className="listTitle">{listTitle}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className={`sliderArrow left ${!isMoved}`}
            onClick={() => handleClick("left")}
          />
          <div className="container" ref={listRef} style={{ transform: transformValue }}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} />
          </div>
          <ArrowForwardIosOutlined
            className={`sliderArrow right ${slideNumber === 19}`}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
}

