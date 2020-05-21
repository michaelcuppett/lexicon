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
  var url = "http://localhost:1337/words?";
  var i;

  for (i=0; i < pinIds.length; i++) {
    url += `word_id_in=${pinIds[i]}&`;
  }

  url = url.slice(0, url.length - 1);

  return new Promise (resolve => {
    var response = fetch(url)
      .then(response => response.json())
      .catch(err => err)
    resolve(response);
  });
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
