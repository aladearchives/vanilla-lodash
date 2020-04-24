let _ = {
  clamp(number, upper, lower) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(string, length) {
    if (length < string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    let hasValue = object[key] !== undefined ? true : false;
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (key in object) {
      let originalValue = object[key];
      return (invertedObject = originalValue);
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
};

// Do not write or modify code below this line.
module.exports = _;
