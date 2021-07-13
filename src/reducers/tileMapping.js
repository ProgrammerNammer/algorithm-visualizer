const initialState = {
  selected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECT":
      console.log(action.payload);
      return { selected: action.payload };
    default:
      return state;
  }
};
