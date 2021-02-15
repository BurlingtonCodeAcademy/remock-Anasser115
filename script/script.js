let name;
let email;
let message;
function submitAlert(){
   name = document.getElementById('name').value;
   email = document.getElementById('email').value;
   message = document.getElementById('message').value;
   alert(`You are about to send an email.\n\nName: ${name}.\nE-mail: ${email}.\nMessage: ${message}`);
}
function resetInput(){
    document.getElementById("form-main").reset();
}
   
    /// Another way to remove value but won't remove the requires red line

        // document.querySelectorAll(".resetInput").forEach(input => {
        //     input.value ="";
        //     input.removeAttribute('value');
        //     //     input.removeAttribute('required');
        //     //    input.setAttribute('required',true)
        //     // input.addAttribute('required');
        // });
