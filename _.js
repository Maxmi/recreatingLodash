const _ = {
  clamp(num, lower, upper){
   	let lowerClampedValue = Math.max(num, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue;
  },
  inRange(number, start, end){
    if(!end) {
      end = start;
      start = 0;
    }
    if(start > end) {
      const temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string){
    const words = string.split(' ');
    return words;
  },
  pad(string, length){
    if(string.length > length) {
      return string;
    }
    let totalPadding = length - string.length;
    let paddingToStart = Math.floor(totalPadding/2);
    let paddingToEnd = totalPadding - paddingToStart;
    let paddedString = " ".repeat(paddingToStart) + string + " " .repeat(paddingToEnd);
    return paddedString;
  },
  has(object, key){
    /* 
    //this was my initial solution
    if(!object[key]){
      return false;
    } else {
      return true;
    } 
    //this is their suggestion
    const hasValue = object[key] !== undefined;
    return hasValue;  
    */
    //my refactored solution
    const hasValue = object[key] ? true : false;
    return hasValue;
  },
  invert(object){
    const invertedObj = {};
    for(let key in object){
      let originalValue = object[key]
      invertedObj[originalValue] = key
    }
    return invertedObj;
  },
  findKey(object, predicate){
    for(let key in object){
      let keyExists = predicate(object[key]);
      if (keyExists) return key;
    } return undefined;
  },

}