let outputData;
let appendHere = document.querySelector("body");
let submitButton = document.querySelector("body > form")

submitButton.addEventListener("submit", function(event) {
  event.preventDefault()
  // debugger
  console.dir(event)
}) // ends submitButton Event Listen


function submitData(username, useremail) {
  
  let fetchData = {name: username, email: useremail}
  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(fetchData)
    }; // Closes configObj variable
  
  return fetch("http://localhost:3000/users", configObj)
  .then (function(response) {  
    debugger
    return response.json()
  })
  .then (function(response) {
    appendHere.insertAdjacentHTML("beforeend", response.id)
  })
  .catch(function(error) {
    appendHere.insertAdjacentHTML("beforeend", error.message);
  });

}