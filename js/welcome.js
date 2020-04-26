
$("#startAnalysis").click(function(){


        document.getElementById("welcomePage").action = "badTable.html";

})



function agree(){
    var checkbox = document.getElementById("understood");


    if(checkbox.checked == true)
    {
    document.getElementById("startAnalysis").style.visibility = "visible"; 
    }
}

