import Dataset from '../data.json';

export function applyPinStyles(pins, englishResults, hebrewResults) {
  var results;
  if (typeof englishResults !== "undefined" && typeof hebrewResults !== "undefined") {
    results = englishResults.concat(hebrewResults);
  }

  if (typeof pins !== "undefined" && pins.length > 0) {
    var objects = [];
    var matches = results.filter(obj => pins.includes(obj.word_id));
    matches.forEach(id => {
      objects = Array.from(document.querySelectorAll(`#${id.word_id}`))
      objects.map(obj => obj.classList.add('pinned'))
    });

    var notMatches = results.filter(obj => !pins.includes(obj.word_id));
    notMatches.forEach(id => {
      objects = Array.from(document.querySelectorAll(`#${id.word_id}`))
      objects.map(obj => obj.classList.remove('pinned'))
    })
  }
}

export function newPinIdSet(array, pinId) {
  var handleTogglePinIds = array;
  var newPinIds;

  if (typeof handleTogglePinIds !== "undefined" && handleTogglePinIds.length > 0) {
    newPinIds = array.concat(pinId);
    newPinIds = [...new Set(newPinIds)];
  } else {
    newPinIds = [pinId]
  }

  return newPinIds
}

export function fetchPins(pinIds, currentPins) {
  var i;
  var matches = [];

  function matchWordId(pinIds, index) {
    var match = Dataset.filter(entry => pinIds[index] === entry.word_id);
    return match[0];
  }

  for (i=0; i < pinIds.length; i++) {
    var obj = matchWordId(pinIds, i);
    matches = [...matches, obj];
  }

  return matches
}

export async function addPin(pinId, currentPins) {
  // Get new set of Pin Ids
  const newPinSet = newPinIdSet(currentPins, pinId);

  // Test for new values
  const newIds = newPinSet.filter(id => newPinSet.includes(id));

  // Fetch new pins
  const newObjects = await fetchPins(newIds, currentPins);

  return {
    ids: newIds,
    objects: newObjects
  }
}

export function removePin(pinId, currentPins, currentObjects) {
  currentPins = currentPins.filter(id => id !== pinId);
  currentObjects = currentObjects.filter(obj => obj.word_id !== pinId);

  return {
    ids: currentPins,
    objects: currentObjects
  };
}
