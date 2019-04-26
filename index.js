// Add your code here
function submitData(username, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: username,
      email: userEmail
    })
  })
  .then(response => response.json())
  .then(jsonObject => displayID(jsonObject))
  .catch(error => displayError(error.message));
}

function displayID(json) {
  return document.querySelector("body").innerHTML += `<p>Your ID is: ${json.id}.`;
}

function displayError(error) {
  return document.querySelector("body").innerHTML += `<p>Unauthorized Access. Error: </p> <p>${error}</p>`;
}
