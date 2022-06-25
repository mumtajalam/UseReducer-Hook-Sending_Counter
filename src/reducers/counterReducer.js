const counterReducer = (state, action) => {
  if (action.type === "INCREAMENT") {
    return state + 1;
  }
  if (action.type === "DECREAMENT") {
    return state - 1;
  }
  return state;
};

export { counterReducer };
