import React, { createContext, useReducer } from "react";
import dataReducer from "../reducers/dataReducer";

const initialState = {
  user: {},
  playlists: [],
  playing: false,
  item: null,
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

  return (
    <GlobalContext.Provider
      value={{
        loginUser,
        setToken,
        setPlaylists,
        user: state.user,
        playlists: state.playlists,
        playing: state.playing,
        item: state.item,
        token: state.token,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
