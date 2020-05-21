export function stripVowels(string) {
  // Remove common vowel points
  string = string.replace(/(05B0)/g, '');
  string = string.replace(/(05B1)/g, '');
  string = string.replace(/(05B2)/g, '');
  string = string.replace(/(05B3)/g, '');
  string = string.replace(/(05B4)/g, '');
  string = string.replace(/(05B5)/g, '');
  string = string.replace(/(05B6)/g, '');
  string = string.replace(/(05B7)/g, '');
  string = string.replace(/(05B8)/g, '');
  string = string.replace(/(05B9)/g, '');
  string = string.replace(/(05BA)/g, '');
  string = string.replace(/(05BB)/g, '');
  string = string.replace(/(05BC)/g, '');
  string = string.replace(/(05BD)/g, '');
  string = string.replace(/(05BE)/g, '');
  string = string.replace(/(05C1)/g, '');
  string = string.replace(/(05C2)/g, '');
  // Remove common accents
  string = string.replace(/(0590)/g, '');
  string = string.replace(/(0591)/g, '');
  string = string.replace(/(0592)/g, '');
  string = string.replace(/(0593)/g, '');
  string = string.replace(/(0594)/g, '');
  string = string.replace(/(0595)/g, '');
  string = string.replace(/(0596)/g, '');
  string = string.replace(/(0597)/g, '');
  string = string.replace(/(0598)/g, '');
  string = string.replace(/(0599)/g, '');
  string = string.replace(/(059A)/g, '');
  string = string.replace(/(059B)/g, '');
  string = string.replace(/(059C)/g, '');
  string = string.replace(/(059D)/g, '');
  string = string.replace(/(059E)/g, '');
  // Remove less common accents
  string = string.replace(/(05A0)/g, '');
  string = string.replace(/(05A1)/g, '');
  string = string.replace(/(05A2)/g, '');
  string = string.replace(/(05A3)/g, '');
  string = string.replace(/(05A4)/g, '');
  string = string.replace(/(05A5)/g, '');
  string = string.replace(/(05A6)/g, '');
  string = string.replace(/(05A7)/g, '');
  string = string.replace(/(05A8)/g, '');
  string = string.replace(/(05A9)/g, '');
  string = string.replace(/(05AA)/g, '');
  string = string.replace(/(05AB)/g, '');
  string = string.replace(/(05AC)/g, '');
  string = string.replace(/(05AD)/g, '');
  string = string.replace(/(05AE)/g, '');
  string = string.replace(/(05A1)/g, '');
  string = string.replace(/(05A2)/g, '');
  // Remove miscellaneous characters
  string = string.replace(/(05C0)/g, '');
  string = string.replace(/(05C1)/g, '');
  string = string.replace(/(05C2)/g, '');
  string = string.replace(/(05C3)/g, '');
  string = string.replace(/(05C4)/g, '');
  string = string.replace(/(05C5)/g, '');
  string = string.replace(/(05C6)/g, '');
  string = string.replace(/(05C7)/g, '');
  string = string.replace(/(05C8)/g, '');
  string = string.replace(/(05C9)/g, '');
  string = string.replace(/(05CA)/g, '');
  string = string.replace(/(05CB)/g, '');
  string = string.replace(/(05CC)/g, '');
  string = string.replace(/(05CD)/g, '');
  string = string.replace(/(05CE)/g, '');
  string = string.replace(/(05C1)/g, '');
  string = string.replace(/(05C2)/g, '');
  // Remove dagesh from consonants
  string = string.replace(/(FB30)/g, '05D0');
  string = string.replace(/(FB31)/g, '05D1');
  string = string.replace(/(FB32)/g, '05D2');
  string = string.replace(/(FB33)/g, '05D3');
  string = string.replace(/(FB34)/g, '05D4');
  string = string.replace(/(FB35)/g, '05D5');
  string = string.replace(/(FB36)/g, '05D6');
  string = string.replace(/(FB37)/g, '05D7');
  string = string.replace(/(FB38)/g, '05D8');
  string = string.replace(/(FB39)/g, '05D9');
  string = string.replace(/(FB3A)/g, '05DB');
  string = string.replace(/(FB3B)/g, '05DB');
  string = string.replace(/(FB3C)/g, '05DC');
  string = string.replace(/(FB3D)/g, '05DD');
  string = string.replace(/(FB3E)/g, '05DE');
  string = string.replace(/(FB40)/g, '05E0');
  string = string.replace(/(FB41)/g, '05E1');
  string = string.replace(/(FB42)/g, '05E2');
  string = string.replace(/(FB43)/g, '05E4');
  string = string.replace(/(FB44)/g, '05E4');
  string = string.replace(/(FB45)/g, '05E5');
  string = string.replace(/(FB46)/g, '05E6');
  string = string.replace(/(FB47)/g, '05E7');
  string = string.replace(/(FB48)/g, '05E8');
  string = string.replace(/(FB49)/g, '05E9');
  string = string.replace(/(FB4A)/g, '05EA');
  string = string.replace(/(FB4B)/g, '05EB');
  string = string.replace(/(FB4C)/g, '05EC');
  string = string.replace(/(FB4D)/g, '05ED');
  string = string.replace(/(FB4E)/g, '05EE');
  // Replace final forms with equivalents
  string = string.replace(/(05DD)/g, '05DE');
  string = string.replace(/(05DF)/g, '05E0');
  string = string.replace(/(05E3)/g, '05E4');
  string = string.replace(/(05E5)/g, '05E6');

  var output = '';
  var i;

  var letters = string.match(/.{1,4}/g);

  output = '';
  for (i=0; i < letters.length; i++) {
    output += String.fromCharCode(parseInt(letters[i],16));
  }

  return output;
}

export function toUnicode(string) {
  var unicodeString = '';
  for (var i=0; i < string.length; i++) {
    var theUnicode = string.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    unicodeString += theUnicode;
  }
  return unicodeString;
}
export function translateToHebrew(input) {
  var newString = input;
  newString = newString.replace(/[a]/g, '\u05D0');
  newString = newString.replace(/[b]/g, '\u05D1');
  newString = newString.replace(/[g]/g, '\u05D2');
  newString = newString.replace(/[d]/g, '\u05D3');
  newString = newString.replace(/[h]/g, '\u05D4');
  newString = newString.replace(/[v]/g, '\u05D5');
  newString = newString.replace(/[z]/g, '\u05D6');
  newString = newString.replace(/[H]/g, '\u05D7');
  newString = newString.replace(/[t]/g, '\u05D8');
  newString = newString.replace(/[y]/g, '\u05D9');
  newString = newString.replace(/[k]/g, '\u05DB');
  newString = newString.replace(/[l]/g, '\u05DC');
  newString = newString.replace(/[m]/g, '\u05DE');
  newString = newString.replace(/[n]/g, '\u05E0');
  newString = newString.replace(/[N]/g, '\uFB40');
  newString = newString.replace(/[s]/g, '\u05E1');
  newString = newString.replace(/[A]/g, '\u05E2');
  newString = newString.replace(/[p]/g, '\u05E4');
  newString = newString.replace(/[Z]/g, '\u05E6');
  newString = newString.replace(/[q]/g, '\u05E7');
  newString = newString.replace(/[r]/g, '\u05E8');
  newString = newString.replace(/[S]/g, '\u05E9');
  newString = newString.replace(/[T]/g, '\u05EA');
  return newString;
}
