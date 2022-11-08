//Validation for registration

function validation() {

    let pass1 = document.getElementById("uPass1");
    let submitemail = document.getElementById("uEmail");
    let mobileNumber = document.getElementById("uContact")
    let userFName = document.getElementById("FName");
    let userLName = document.getElementById("LName");
    let username = document.getElementById("UName");
    let useraddress = document.getElementById("Address");
    let rollnumber = document.getElementById("Roll");

//for name
    let userFName2 = userFName.value.trim();
    if (!/^[a-z A-Z \.]{3,}$/.test(userFName2)) {
      alert("Please enter valid first name");
      userFName.focus();
      return false;
    }

    let userLName2 = userLName.value.trim();
    if (!/^[a-z A-Z \.]{3,}$/.test(userLName2)) {
      alert("Please enter valid last name");
      userLName.focus();
      return false;
    }

    let userName2 = username.value.trim();
    if (!/^[a-z A-Z \.]{6,}$/.test(userName2)) {
      alert("Please enter valid user name with atleast 6 characters");
      username.focus();
      return false;
    }

//for address
    let useraddress2 = useraddress.value.trim();
    if (!/^[a-z A-Z 0-9\.]{20,}$/.test(useraddress2)) {
      alert("Please enter valid address with atleast 20 characters");
      useraddress.focus();
      return false;
    }

//roll no.
// if (rollnumber.value == "" || rollnumber.value.length < 10) {
//     alert("roll number invalid, please enter 6 digit numbers only");
//     mobileNumber.focus();
//     return false;
//   }

//   if (!/^[0-9]*$/g.test(mobileNumber.value)) {
//     alert("Only numbers are allowed for mobile number field");
//     mobileNumber.focus();
//     return false;
//   }

//for email
    // if (submitemail.value == "") {
    //   alert("Please Enter valid Email");
    //   submitemail.focus();
    //   return false;
    // }

    if (!/^([a-zA-Z 0-9\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/.test(submitemail.value)) {
        alert("Please enter valid email address");
        submitemail.focus();
        return false;
      }
  
    
//for mobile number

    if (mobileNumber.value == "" || mobileNumber.value.length < 10) {
      alert("Only numbers are allowed for mobile number field starting with 6 to 9");
      mobileNumber.focus();
      return false;
    }
  
    if (!/^[6-9][0-9]{9}$/.test(mobileNumber.value)) {
      alert("Only numbers are allowed for mobile number field starting with 6 to 9");
      mobileNumber.focus();
      return false;
    }
  
  //For Password: To check a password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pass1.value.match(passw)) {
      return true;
    }
    else {
      alert('Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.')
      return false;
    }
  }
  
  function validationLogin() {
  
    let loginEmail = document.getElementById("exampleInputEmail33")
    let loginPass = document.getElementById("exampleInputPassword3")
    
    if (loginEmail.value == "" || loginPass.value == "") {
      alert("Invalid Credentials");
      loginEmail.focus();
      return false;
    }
  }
  
