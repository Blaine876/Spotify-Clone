import React from "react";
import SongList from "./SongList";

import "./Favorites.css";

const shenseea = require("../assets/images/shenseea.PNG");
const dexta = require("../assets/images/dexta.PNG");
const durkio = require("../assets/images/durkio.PNG");
const skillibeng = require("../assets/images/skillibeng.PNG");

function Favorites() {
  return (
    <div>
      <h3>Favorites</h3>
      <div className="songlist__container">
        <SongList
          songTitle="Defy The Odds"
          artistName="Skillibeng"
          songImage={skillibeng}
        />
        <SongList
          songTitle="Good Comfort"
          artistName="Shenseea"
          songImage={shenseea}
        />
        <SongList
          songTitle="Twinkle"
          artistName="Dexta Dapps"
          songImage={dexta}
        />
        <SongList
          songTitle="Broke Up In Miami"
          artistName="Lil Durk"
          songImage={durkio}
        />
      </div>
    </div>
  );
}

export default Favorites;
