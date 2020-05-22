import Dataset from '../data.json';

export function findEnglishResults(input, limit) {
  input = input.toLowerCase();
  var matches = Dataset.filter(entry => entry.english.toLowerCase().includes(input))
  return matches.slice(0, limit);
}

export function findHebrewResults(input, limit) {
  var i;
  var inputArray = [];
  var entryArray = [];
  var found;
  var matches = [];

  for (i=0; i < input.length; i++) {
    inputArray = [...inputArray, input.charAt(i)]
  }

  Dataset.forEach(entry => {
    entryArray = [];
    for (i=0; i < entry.simplified_hebrew.length; i++) {
      entryArray = [...entryArray, entry.simplified_hebrew.charAt(i)];
    }

    found = inputArray.every(letter => entryArray.includes(letter));

    if (found === true) {
      matches = [...matches, entry]
    }
  })

  return matches.slice(0, limit);

}
