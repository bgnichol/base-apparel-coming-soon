const form = document.getElementById("form");
const email = document.getElementById("email");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = email.Value;

    // check if it is a valid email

    if(!validateEmail(emailVal)){
        form.classList.add("error");
    }
    else{
        form.classList.remove("error"); 
    }
});


function validateEmail(email) 
{
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    return re.test(String(email).toLowerCase());
}
