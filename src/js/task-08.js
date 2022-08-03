const form = document.querySelector(".login-form");




function onFormSubmit(event)  {
    event.preventDefault();
    
    
    //  const formData = new FormData(event.currentTarget)
    const elem = event.currentTarget.elements;
    const email = elem.email.value;
    const pass = elem.password.value;
    
    const allData = {
        email,
        pass,
    }

if (email === "") {
    return alert("Please fill in the email field");
  } if (pass === "") {
    return alert("Please fill in the password field");
  }  else {
      console.log(allData)
  }
  event.currentTarget.reset();
}
form.addEventListener("submit", onFormSubmit)