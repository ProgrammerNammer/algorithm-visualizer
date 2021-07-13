import React from "react";
import styles from "./TileButton.module.css";
import { connect } from "react-redux";

import agent from "../../actions/agent";

const mapStateToProps = (state) => {
  return { selectedTag: state.tileMappingReducer.selected };
};

const mapDispatchToProps = (dispatch) => ({
  handleButtonPress: (buttonTag) => agent.TileMapping.handleButtonClick(buttonTag),
});

const TileButton = ({
  text,
  tileImage,
  myTag,
  selectedTag = null,
  handleButtonPress,
}) => {
  console.log(myTag, selectedTag);
  return (
    <button
      className={`${styles.button} ${
        selectedTag === myTag ? styles.button__active : styles.button__inactive
      }`}
      onClick={() => {
        handleButtonPress(myTag);
      }}
    >
      <div className={styles.button_content}>
        {tileImage && <img src={tileImage} className={"image--icon"} />}
        {text}
      </div>
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TileButton);
