let form = document.getElementById('form')
form.addEventListener('submit', function(e){
//auto submission of form
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let account = document.getElementById('account').value
    let mobile = document.getElementById('mobile').value
    let passw = document.getElementById('passw').value
      
    
    
    
    //fetch post request
    fetch("http://localhost:3004/StudentData",{
            method:'POST',
            body:JSON.stringify({
            name:name,
            email:email,
            address: address,
            account:account,
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
        alert("Record added successfully");
    })
})

