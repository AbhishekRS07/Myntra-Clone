
document.getElementById("submit").addEventListener("click", signup)

function signup(){

   var mob = document.getElementById("mobile").value

   if(mob=="9999999999"){
     window.location.replace("./otp/otp.html")
   }
   else{
    alert("Please Enter Valid Mobile Number")
   }
}