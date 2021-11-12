fetch('https://reqres.in/api/users')

    //Display Message whether the connection success or not.
    .then(res => {
        if(res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
    })
    .then(data => console.log(data)) 

    