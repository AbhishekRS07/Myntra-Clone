alert("your is 1234")
    document.getElementById("submitO").addEventListener("click", otpFun);

    function otpFun() {

      var value = document.getElementById("otpO").value;
      if (value == "1234") {
        alert("Payment Successful");
       
        localStorage.removeItem("aadToCart1");
        localStorage.removeItem("aadToCart2");
        localStorage.removeItem("aadToCart3");
        
        window.location.replace("./index.html");
      } else {
        alert("Enter the Correct OTP");
      }
    }
 