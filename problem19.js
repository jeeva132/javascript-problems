function noSpace(x) {
  var result = "";
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}
