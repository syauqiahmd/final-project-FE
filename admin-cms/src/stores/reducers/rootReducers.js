const initialStore = {
  users: [],
  user: {}
};

function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case "users/successFetch":
      return {
        ...state,
        users: action.payload,
      };

    case "user/successFetch":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
