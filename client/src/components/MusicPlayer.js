import React from "react";
import "./MusicPlayer.css";
import { Dashboard, Sidebar, Footer } from "../components";

function MusicPlayer({ spotify }) {
  return (
    <div className="musicplayer">
      <div className="musicplayer__body">
        <Sidebar />
        <Dashboard spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
}

export default MusicPlayer;
