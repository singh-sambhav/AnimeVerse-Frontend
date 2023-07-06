import "./Featured.scss"
import {PlayArrow} from "@material-ui/icons"
import { InfoOutlined } from "@material-ui/icons"
// import pokemon from '../../Pics/pokemonash.webp'
import logo from '../../Pics/pokemonlogo.png'
import Slider from "./Slider"


export default function Featured({type}) {
  return (
    <div className="Featured">
      <Slider/>
      <div className="info">
      <img
        src={logo}
        alt=""
      />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div> 
     </div>  
    </div>
  )
}
