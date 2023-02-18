function validate() 
{
    "use strict";
var username=document.getElementById("username").value,
    password=document.getElementById("password").value;
if(username=="admin" && password=="admin")
{
    let ref=window.open("Admin.html");
   
}    
else if(username=="webions" && password=="webions")
{
    let ref=window.open("Home1.html");
}
else
{
    alert("Invalid Username and Password ");
}
}
