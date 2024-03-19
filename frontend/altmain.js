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
     const errorWarning = document.getElementById('errorWarning')

     const existingErrorMessage = errorWarning.querySelector('p');
     if (existingErrorMessage) {
         existingErrorMessage.remove();
     }

     if(username.trim().length === 0 || email.trim().length === 0 || userpassword.trim().length === 0 || confirmPassword.trim().length === 0) {
          let errorMessage = document.createElement('p')
          errorMessage.textContent = `Field cannot be empty!`
          errorMessage.style.color = "red"
          errorMessage.style.fontSize = "10px"
          errorMessage.style.paddingLeft = "10px"

          errorWarning.appendChild(errorMessage);
          
          console.log("Cannot have empty fields!");
     } else if (confirmPassword !== userpassword) {
          let errorMessage = document.createElement('p')
          errorMessage.textContent = `Passwords do not match`
          errorMessage.style.color = "red"
          errorMessage.style.fontSize = "10px"
          errorMessage.style.paddingLeft = "10px"

          errorWarning.appendChild(errorMessage);

          console.log("Passwords do not match");
     } else if (!checkbox.checked){
          let errorMessage = document.createElement('p')
          errorMessage.textContent = `Check the damn box`
          errorMessage.style.color = "red"
          errorMessage.style.fontSize = "10px"
          errorMessage.style.paddingLeft = "10px"

          errorWarning.appendChild(errorMessage);

          console.log("Check the damn box");
     }

     // if(username.length <= 0 || email.length <= 0 || userpassword.length <= 0 || confirmPassword.length <= 0) {
     //      let errorMessage = document.createElement('p')
     //      errorMessage.textContent = `Field cannot be empty!`
     //      errorMessage.style.color = "red"
     //      errorMessage.style.fontSize = "10px"
     //      errorMessage.style.paddingLeft = "10px"

     //      const existingErrorMessage = errorWarning.querySelector('p');
     //      if (existingErrorMessage) {
     //          existingErrorMessage.remove();
     //          errorWarning.appendChild(errorMessage)
     //      } else {
     //           errorWarning.appendChild(errorMessage)
     //      }
          
          
     //      console.log("Cannot have empty fields!")
     // }
     // else if (confirmPassword !== userpassword) {
     //      console.log("Passwords do not match")
     // }
     // else if (!checkbox.checked){
     //      console.log("Check the damn box")
     // }
     else {
          errorMessage.remove();
          saveUser({username, email, userpassword})
     }
}


const signup_Button = document.getElementById('signup_Button')

signup_Button.addEventListener('click', checksValid)