// Add your code here
function submitData(name, email) {
    let data = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // console.log(json)
            // console.log(json.id)
            document.body.innerHTML += `<h1>${json.id}</h1>`
        })
        .catch(function(error) {
            // console.log(error.message)
            document.body.innerHTML += `<h1>${error.message}</h1>`
        })
}