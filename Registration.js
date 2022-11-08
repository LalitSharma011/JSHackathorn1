let form = document.getElementById('form')
form.addEventListener('submit', function(e){
//auto submission of form
    e.preventDefault()
    let fname = document.getElementById('FName').value
    let lname = document.getElementById('LName').value
    let username = document.getElementById('UName').value
    let address = document.getElementById('Address').value
    let rollnumber = document.getElementById('Roll').value
    let email = document.getElementById('uEmail').value
    let mobile = document.getElementById('uContact').value
    let passw = document.getElementById('uPass1').value
    //fetch post request
    fetch("http://localhost:3000/StudentData",{
            method:'POST',
            body:JSON.stringify({
            fname:fname,
            lname:lname,
            username:username,
            address: address,
            rollnumber:rollnumber,
            email:email,
            mobile:mobile,
            passw:passw

        }),
        headers:{
            "content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var results = document.getElementById('results')
        results.innerHTML = `<p> The title of the to do is ${data.title}</P>
        <p>The body of the to do is ${data.body}</p>`
    })
})

