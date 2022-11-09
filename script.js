//Validation for registration
function validation() {

    let username = document.getElementById("name");
    let submitemail = document.getElementById("email");
    let useraddress = document.getElementById("address");
    let accountnumber = document.getElementById("account");
    let mobileNumber = document.getElementById("mobile")
    let pass1 = document.getElementById("passw");
 
//for name
    let username2 = username.value.trim();
    if (!/^[a-z A-Z \.]{3,}$/.test(username2)) {
      alert("Please enter valid name");
      username.focus();
      return false;
    }

//for email
  if (!/^([a-zA-Z 0-9\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/.test(submitemail.value)) {
    alert("Please enter valid email address");
    submitemail.focus();
    return false;
  }

  //for address
  let useraddress2 = useraddress.value.trim();
  if (!/^[a-z A-Z 0-9 ,\.]{8,}$/.test(useraddress2)) {
    alert("Please enter valid address with atleast 8 characters");
    useraddress.focus();
    return false;
  }

  //for account
  if (!/^[0-9]{8}$/.test(accountnumber.value)) {
    alert("Please enter 8 digits of your account number");
    accountnumber.focus();
    return false;
  }
  
if (!/^[6-9][0-9]{9}$/.test(mobileNumber.value)) {
  alert("Only 10 digit numbers are allowed for mobile number field starting with 6 to 9");
  mobileNumber.focus();
  return false;
}
 //for Password

  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (pass1.value.match(passw)) {
    return true;
  }
  else {
    alert('Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.')
    return false;
  }
}

//Registration JSON server

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
    fetch("http://localhost:3004/BankData",{
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

// login validation

function login() {

  let btnLogin = document.getElementById("loginSubmitButton");
  btnLogin.onclick = login;

  console.log("login");
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;
  if (email === "") {
    alert("Please enter your email id field and try again");
  }
  else if (password === "") {
    alert("password missing");
  }
  else {
    fetch(`http://localhost:3004/BankData?email=${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          alert("Email address does not exist")
        }
        if (data[0].passw === password) {
          console.log("Success");
          alert("login successful");
          return true;
        }
        else {
          alert("Incorrect Password")
          return false;          
        }
      })
  }
}
