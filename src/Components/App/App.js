import React from "react";
import styles from "./App.module.css";

import NodeMap from "../NodeMap/NodeMap";
import TileButton from "../TileButton/TileButton";
import "./App.css";

import BombSVG from "../../assets/bomb.svg";
import TargetSVG from "../../assets/flag.svg";
import StartSVG from "../../assets/start.svg";
import WeightedSVG from "../../assets/weighted.svg";

const App = () => {
  //const [tileButtonStatus, setTileButtonStatus];

  const handleButtonPress = (childComponent) => {
    console.log(childComponent);
  };

  return (
    <body>
      <nav></nav>
      <div className={styles.nodeTools}>
        <TileButton text="Start Node" tileImage={StartSVG} tag={"startNode"} />
        <TileButton
          text="Target Node"
          tileImage={TargetSVG}
          tag={"targetNode"}
        />
        <TileButton text="Wall Node" tag={"wallNode"} />
      </div>
      <NodeMap />
    </body>
  );
};

export default App;
