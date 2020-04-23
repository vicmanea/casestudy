
// function validatePass(){

    
   
// }


$("#signIn").click(function(){

    alert("The button was clicked!");

    var pwInput = document.getElementById("password").value;
    var usernameInput = document.getElementById("usernameInput").value;

    if(usernameInput ==="" || pwInput === ""){
        alert("Either the password or uswrname is missing");
    }
    else if(usernameInput === "admin" && pwInput === "admin")
    {
        alert("Correct information inputted. You will now be redirected to the welcome page.");
        var url = $(this).data('target');
        location.replace(url);

    }


})


// $('#signIn').on('click', function(event) {
//     event.preventDefault(); 
//     var url = $(this).data('target');
//     location.replace(url);
// });