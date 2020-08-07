import React from "react";
import { Dashboard, Sidebar, Footer } from "../components";

import "./MusicPlayer.css";

function MusicPlayer({ spotify }) {
  return (
    <div className="musicplayer">
      <div className="musicplayer__body">
        <Sidebar />
        <Dashboard spotify={spotify} />
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default MusicPlayer;
