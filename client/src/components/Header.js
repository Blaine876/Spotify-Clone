import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { GlobalContext } from "../context/DataContext";
import "./Header.css";

function Header() {
  const { user } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Browse your favorite artiste's song" />
      </div>

      <div className="header__right">
        <Avatar src="" alt={user.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
