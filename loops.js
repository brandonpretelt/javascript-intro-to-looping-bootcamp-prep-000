function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (array[i] === 0) {
      return array[i].push("I am 1 strange loop.");
    } else {
      return array[i].push(`I am ${i} strange loops.`); 
    }
  }
}