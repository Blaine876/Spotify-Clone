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

    default:
      return state;
  }
};
