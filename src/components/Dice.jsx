import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

import { useState } from "react";

const fullDice = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [diceValue, setDiceValue] = useState(fullDice[Math.floor(Math.random() * fullDice.length)]);

  const handleClick = () => {
    setDiceValue(emptyDice);
    setTimeout(() => {
      setDiceValue(fullDice[Math.floor(Math.random() * fullDice.length)]);
    }, 1000);
  };

  return <img onClick={handleClick} src={diceValue} width="300" />;
}

export default Dice;
