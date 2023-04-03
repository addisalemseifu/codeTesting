
 exports.stringLenght = (string) => {
  if(string.trim().length>=1 && string.trim().length<=10) {
    return string.trim().length;
  }else {
    return "This is too small or too long";
  }
  }

  exports.reverseString = (string) => {
  const splitStr = string.split("")
    return splitStr.reverse().join('');
  }


  