const rockPaperScissors = (player1, player2) => {
  const map = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (player1 === player2) return "Draw!";

  return "Player " + (map[player1] === player2 ? 1 : 2) + " won!";
};
