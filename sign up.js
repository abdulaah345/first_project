function validate() 
{
    "use strict";
var password=document.getElementById("password").value,
    co_password=document.getElementById("co password").value;
if(password==co_password && password != "")
{
    let ref=window.open("Home1.html");
}    
else if(password =="" || co_password =="")
{
    alert("Complete data entry ");
}
else
{
    alert("The password is not the same ");
}
}