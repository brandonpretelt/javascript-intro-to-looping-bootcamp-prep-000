function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (array[i] === 0) {
      return "I am 1 strange loop.";
    } else {
      return `I am ${i} strange loops.`; 
    }
  }
}