import React, { useEffect, useState } from "react";
import styles from "./NodeMap.module.css";

import Node from "./Node/Node";

const NodeMap = ({ width = 10, height = 10, dimensionArray }) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const nodes = [];

    for (let i = 0; i < height; i++) {
      const currentRowNodes = [];

      for (let j = 0; j < width; j++) {
        currentRowNodes.push([]);
      }
      nodes.push(currentRowNodes);
    }

    setNodes(nodes);
    return null;
  }, []);

  return (
    <div className={styles.nodeMap}>
      {nodes.map((row, rowIndex) => {
        return (
          <div className={styles.row}>
            {row.map((column, columnIndex) => {
              return (
                <Node
                  key={rowIndex + columnIndex}
                  rowNumber={rowIndex + 1}
                  columnNumber={columnIndex + 1}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default NodeMap;
