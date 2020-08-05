import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import "./Footer.css";
const skillibeng = require("../assets/images/skillibeng.PNG");

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={skillibeng} alt="skillibeng" />
        <div className="footer__songInfo">
          <h4>Defy the Odds</h4>
          <p>Skillibeng</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__red" />
        <SkipNextIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__red" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider color="secondary" aria-labelledby="continuous-slice" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
