
document.getElementById("otpsubmit").addEventListener("click", otpcheck)

function otpcheck(){

  var data=  document.getElementById("otpinput").value
   console.log(data)
  if(data=="1234"){
    localStorage.setItem("login" , true)
    window.location.replace("./../../homepage/homepage.html")
  }
  else{
    alert("Please Enter Valid OTP")
  }
}