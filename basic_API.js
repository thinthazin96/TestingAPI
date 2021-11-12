fetch('https://reqres.in/api/users')

    //this return the detail data of response from server
    .then(res => res.json())
    .then(data => console.log(data)) 

    