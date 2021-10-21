/**
 * @description Calculates the character frequencies in a string.
 * Whitespace, punctuation, Non-english characters, and
 * numerals are ignored.
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being characters, and
 * values being the character counts.
 * @example
 *  charFreq('data');
 *  // returns { a: 2, d: 1, t: 1 }
 */

function charFreq(sentence) {
  const obj = {}; 
  const arr = sentence.toLowerCase().split(""); 
  const wanted = /^[a-zA-Z]+$/; 
  const unwanted = /^[! .?0-9]/;

  for (let i of arr) {
    if (obj[i] && i.match(wanted)) obj[i] += 1;
    else if (!i.match(unwanted)) obj[i] = 1;
  }

  return obj;
}

charFreq("data");
