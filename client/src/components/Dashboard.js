import React, { useContext } from "react";
import { Header, SongRow } from "../components";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { GlobalContext } from "../context/DataContext";
import "./Dashboard.css";

function Dashboard({ spotify }) {
  const { discover_weekly, setTrack, setPlaying } = useContext(GlobalContext);

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        console.log("Res:", res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("R: ", r);
          setTrack(r.item);
          setPlaying(true);
        });
      })
      .catch((err) => {
        console.log("Error playing song: ", err);
        setPlaying(false);
      });
  };

  const playPlaylist = (id) => {
    spotify
      .play({
        uris: [`spotify:playlist:37i9dQZEVXcKzm6iVxdBLT`],
      })
      .then((res) => {
        console.log("Res:", res);
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("R: ", r);
          setTrack(r.item);
          setPlaying(true);
        });
      })
      .catch((err) => {
        console.log("Error playing playlist: ", err);
        setPlaying(false);
      });
  };

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
          <PlayCircleFilledIcon
            onClick={playPlaylist}
            className="dashboard__shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            key={item.track.id}
            playTrack={playSong}
            track={item.track}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
