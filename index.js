class Formatter {
  //add static methods here
  static capitalize(string){
    //check if strin g is non empty
    if(typeof string !== 'string' || string.length === 0){
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //remove all non alphanumeric characters
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

static titleize(string){
  if(typeof string !== 'string' || string.length === 0){
    return string;
  }
  //separate the string and also declare excluded wors
  const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  const words = string.split(' ');

  const titleizedWords = words.map((word, index) => {
    if (index === 0 || !excludedWords.includes(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word.toLowerCase();
    }
  });
  return titleizedWords.join(' ');
}
}