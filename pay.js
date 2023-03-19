
document.getElementById("submitA").addEventListener("click", submitP);

function submitP() {
  var name = document.getElementById("nameA").value;
  var card = document.getElementById("CardNA").value;
  var expiry = document.getElementById("expiryA").value;
  var cvv = document.getElementById("cvvA").value;

  if ( cvv == "") {
    alert("Enter all the fields");
  }
  else{
    window.location.replace("./otp.html");
   
  } 
}
