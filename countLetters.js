function countLetters(str) {
  var output = {};
  var noSpace = str.toLowerCase().split(" ").join('');
  var char = noSpace.split('');
  //console.log(char);
  //console.log(char.length);

  for (i = 0; i < char.length; i++) {
    if (char[i] in output) {
      output[char[i]] +=1;
      //console.log(output[char[i]]);
    }
    else {
      output[char[i]] = 1;
      //console.log(output[char[i]]);
    }
  }

  return output;
}

console.log(countLetters('Lighthouse in the house'));

