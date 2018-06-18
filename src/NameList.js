import React from "react";

const NameList = props => (
  <div>
    {props.names.map((name, index) => {
      const isLuckyWinner = index === props.luckyWinnerIndex;
      return (
        <li id={isLuckyWinner ? "winner" : ""} key={index}>
          {name}
        </li>
      );
    })}
  </div>
);

export default NameList;
