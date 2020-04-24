
$("#startAnalysis").click(function(){

//This is to debug
    alert("The button was clicked!");


        document.getElementById("welcomePage").action = "badTables.html";



})



function agree(){
    var checkbox = document.getElementById("understood");


    if(checkbox.checked == true)
    {
    document.getElementById("startAnalysis").style.visibility = "visible"; 
    }
}

