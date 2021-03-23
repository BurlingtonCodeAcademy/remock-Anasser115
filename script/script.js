let name;
let email;
let message;
// function to show the info on the contact form
function submitAlert(){
   name = document.getElementById('name').value;
   email = document.getElementById('email').value;
   message = document.getElementById('message').value;
   alert(`You are about to send an email.\n\nName: ${name}.\nE-mail: ${email}.\nMessage: ${message}`);
}
function resetInput(){
    document.getElementById("form-main").reset();
}