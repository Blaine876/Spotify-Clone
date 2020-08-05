import React, { useContext } from "react";
import { SidebarOption } from "../components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { GlobalContext } from "../context/DataContext";

import "./Sidebar.css";

const spotify_logo = require("../assets/images/SP.jpg");
function Sidebar() {
  const { playlists } = useContext(GlobalContext);

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={spotify_logo} alt="logo" />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Browse" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Dancehall" />
      <SidebarOption title="Afrobeats" />
    </div>
  );
}

export default Sidebar;
