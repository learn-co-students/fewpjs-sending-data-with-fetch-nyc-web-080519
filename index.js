function submitData(name, email) {

    let configOBJ = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    }

    return fetch("http://localhost:3000/users", configOBJ)
    // .then(response => response.json())
        .then(function (response) {
            debugger
            return response.json()
        })
        .then(function(object){
            document.body.innerHTML = object["id"]
        })
        .catch(function(error){
            alert("Unauthorized Access")
            // console.log(error.message)
            document.body.innerHTML = error.message
        })
}