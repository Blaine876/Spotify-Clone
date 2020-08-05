import React, { useContext } from "react";
import { Header, SongRow } from "../components";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { GlobalContext } from "../context/DataContext";
import "./Dashboard.css";

function Dashboard({ spotify }) {
  const { discover_weekly } = useContext(GlobalContext);

  console.log(discover_weekly);

  return (
    <div className="dashboard">
      <Header spotify={spotify} />

      <div className="dashboard__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="dashboard__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="dashboard__songs">
        <div className="dashboard__icons">
          <PlayCircleFilledIcon className="dashboard__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
