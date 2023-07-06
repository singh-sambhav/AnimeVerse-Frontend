import "./watch.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import videoSource from '../../Pics/masoom.mp4';

export default function watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosOutlined/>
        Home
      </div>
      <video
      className="video"
      Play
      progress
      controls
      src={videoSource}
      />
    </div>
  )
}
