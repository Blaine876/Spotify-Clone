import React, { createContext, useReducer } from "react";
import dataReducer from "../reducers/dataReducer";

const initialState = {
  user: {},
  playlists: [],
  playing: false,
  track: null,
  top_artists: null,
  spotify: null,
  discover_weekly: null,
  token: null,
  // "BQBYdEimqN2aAhJuSmxR-kS49SfI2sG5WP6tv9ROQO0NYTMsamicktCTIc18wGRYjHMFHWQNAogSo3-wGmGeIoa9e7jSkb7b8Yv1bbNUBsCn0pWHTQMTW3jKGGKeP8hxT7dbad_Pk39a_TGI_mlTWjVc3R5Yiex42ibPBvQ",
};

//Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  //actions
  function loginUser(user) {
    dispatch({
      type: "LOGIN_USER",
      payload: user,
    });
  }

  function setToken(token) {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  }

  function setPlaylists(playlists) {
    dispatch({
      type: "SET_PLAYLISTS",
      payload: playlists,
    });
  }

  function setDiscoverWeekly(discover_weekly) {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      payload: discover_weekly,
    });
  }

  function setTrack(track) {
    dispatch({
      type: "SET_TRACK",
      payload: track,
    });
  }

  function setPlaying(playing) {
    dispatch({
      type: "SET_PLAYING",
      payload: playing,
    });
  }

  function setSpotify(spotify) {
    dispatch({
      type: "SET_SPOTIFY",
      payload: spotify,
    });
  }

  function setTopArtists(top_artists) {
    dispatch({
      type: "SET_TOP_ARTISTS",
      payload: top_artists,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        playlists: state.playlists,
        discover_weekly: state.discover_weekly,
        playing: state.playing,
        track: state.track,
        token: state.token,
        spotify: state.spotify,
        top_artists: state.top_artists,
        loginUser,
        setToken,
        setPlaylists,
        setDiscoverWeekly,
        setTrack,
        setPlaying,
        setSpotify,
        setTopArtists,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
