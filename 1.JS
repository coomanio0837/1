function Submit(){
    var x = document.getElementById("NameText").value
    var y = document.getElementById("ContactText").value
    var z = document.getElementById("CompanyText").value
    if(x.length > 4 && y.length > 4 && z.length > 4){
        alert("Submit was succesful")
    }else{
        alert("Error")
    }
}
function Email(){
    var a = document.getElementById("EmailText").value
    if(a.length > 9){
        alert("Wait an email")
    }else{
        alert("Error")
    }
}