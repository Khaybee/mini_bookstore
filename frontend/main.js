const baseURL = "http://localhost:4000/"

const saveUser = (details)=>{
     const url = `${baseURL}register`
     
     axios.post(url, details)
     .then((response)=> {
          console.log(response)
     })
     .catch((err)=>{
          console.log(err)
          Swal.fire({
               icon: "error",
               title: "Cannot Connect to Database",
               text: "Something went wrong!",
               footer: 'Check your connection and try again'
             });
             setTimeout(saveUser, 5000)
     })
}
saveUser()
const checksValid = () => {
     const username = document.getElementById('username').value;
     const email = document.getElementById('email').value;
     const userpassword = document.getElementById('password').value;
     const confirmPassword = document.getElementById('confirmPassword').value;
     const checkbox = document.getElementById('checkbox')
     // const errorWarning = document.getElementById('errorWarning')

     if(username.length <= 0 || email.length <= 0 || userpassword.length <= 0 || confirmPassword.length <= 0) { 
          console.log("Cannot have empty fields!")
     }
     else if (confirmPassword !== userpassword) {
          console.log("Passwords do not match")
     }
     else if (!checkbox.checked){
          console.log("Check the damn box")
     }
     else {
          saveUser({username, email, userpassword})
     }
}

const signup_Button = document.getElementById('signup_Button')

signup_Button.addEventListener('click', checksValid)