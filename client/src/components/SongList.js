import React from "react";
import "./SongList.css";

function SongList({ songTitle, artistName, songImage }) {
  return (
    <div className="song">
      <img src={songImage} alt="pic" />
      <h4>{songTitle}</h4>
      <p>{artistName}</p>
    </div>
  );
}

export default SongList;
