function getCount(str) {
  const lowerStr = str.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    switch (char) {
      case "a":
        vowelCount++;
        break;
      case "e":
        vowelCount++;
        break;
      case "i":
        vowelCount++;
        break;
      case "o":
        vowelCount++;
        break;
      case "u":
        vowelCount++;
        break;
    }
  }

  return vowelCount;
}
