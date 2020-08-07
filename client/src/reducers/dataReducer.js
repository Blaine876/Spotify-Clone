export default (state, action) => {
  console.log(action);

  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.payload,
      };

    case "SET_TRACK":
      return {
        ...state,
        track: action.payload,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.payload,
      };

    default:
      return state;
  }
};
