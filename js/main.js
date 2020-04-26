
$("#signIn").click(function(){


    var pwInput = document.getElementById("password").value;
    var usernameInput = document.getElementById("usernameInput").value;

    if(usernameInput ==="" || pwInput === ""){
        alert("Either the password or uswrname is missing");
    }
    else if(usernameInput === "admin" && pwInput === "admin")
    {
        alert("Correct information inputted. You will now be redirected to the welcome page.");
        document.getElementById("loginForm").action = "welcome.html";


    }


})

