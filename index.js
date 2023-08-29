function validate() {
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      var password = document.getElementById("Password");
      
      if (password.value.length < 6 || password.value.length > 12) {
            alert("Password has to be less then 12 and greter then 6");
      }
      else if (phone.value.length !== 13) {
            alert("Phone number must be 13 digit");
      }
      else if (email.value.slice(-10,email.value.length) !== "@gmail.com") {
            alert("invalid email address");
      }
      else {
            alert("Successful Submssion");
      }
}