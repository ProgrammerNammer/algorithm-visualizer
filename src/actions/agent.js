const TileMapping = {
  handleButtonClick: (buttonTag) => {
    return { type: "SET_SELECT", payload: buttonTag };
  },
};

export default {
  TileMapping,
};
