import { useState } from 'react';
import './listItem.scss';
import alex from '../../Pics/alex.jpg';
import videoSource from '../../Pics/masoom.mp4';
import { PlayArrowRounded, AddRounded, ThumbUpOutlined, ThumbDownOutlined } from '@material-ui/icons';

export default function ListItem() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="listItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imageWrapper">
        {isHovered ? (
          <video className="video" autoPlay  loop>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="Alex" src={alex} alt="" />
        )}
        <div className="itemInfo">
          <div className="icon">
            <PlayArrowRounded />
            <AddRounded />
            <ThumbUpOutlined />
            <ThumbDownOutlined />
          </div>
          <span>1 hour 14 mins</span>
          <span className="limit">13+</span>
          <span>1999</span>
        </div>
      </div>
    </div>
  );
}
