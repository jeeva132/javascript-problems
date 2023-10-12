function getAverage(scoreArray) {
  let sum = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    sum = sum + scoreArray[i];
  }
  const avg = sum / scoreArray.length;
  const roundedDown = Math.floor(avg);
  return roundedDown;
}
