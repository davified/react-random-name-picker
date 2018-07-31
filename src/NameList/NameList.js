import React from "react";

const NameList = props => (
  <div>
    <ul>
      {props.names.map((name, i) => {
        const isWinner = props.luckyWinnerIndex === i;
        return (
          <li key={i} id={isWinner ? "winner" : ""}>
            {name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default NameList;
