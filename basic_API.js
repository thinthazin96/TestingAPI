fetch('https://reqres.in/api/users', 
    {
    method: 'POST', //updating exisiting database
    body: JSON.stringify({ //must pass as JSON.stringify format to add data in fetch
        name: 'User 1' //adding new user
    })
})
    //Display Message whether the connection success or not.
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data)) 
    .catch(error => console.log('ERROR'))

    