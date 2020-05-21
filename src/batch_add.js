const url = 'http://localhost:1337/words/'
const data = Dataset;

// Add entry
data.map(entry => {
  const params = {
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry),
    method: "POST",
  }

  fetch(url, params)
    .then(data => console.log("Entry logged."))
    .catch(error => console.log(error));
})

// Update with simplified Hebrew
var i = 0;
const data = Dataset;
data.map(entry => {
  const unicodeHebrew = toUnicode(entry.Hebrew);
  const simplifiedHebrew = stripVowels(unicodeHebrew);

  const updateBody = {
    "id": i,
    "Simplified_Hebrew": simplifiedHebrew
  }

  const params = {
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(updateBody),
    method: "PUT",
  }

  i++;

  fetch(`http://localhost:1337/words/${i}`, params)
    .then(data => console.log("Entry updated."))
    .catch(error => console.log(error));
})
