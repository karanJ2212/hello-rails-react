// app/javascript/store/reducers.js
const initialState = {
  randomGreeting: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RANDOM_GREETING":
      return { ...state, randomGreeting: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
