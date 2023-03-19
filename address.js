
    document.getElementById("submitA").addEventListener("click", submitFun);

    function submitFun() {
      var pin=document.getElementById("pinA").value;

      if (pin === "") {
        alert("Enter all the fields");
      }
      else{
        window.location.replace("./pay.html");
     } 

    }

    var cart1 =JSON.parse(localStorage.getItem("aadToCart1"))||[];
      var cart2 =JSON.parse(localStorage.getItem("aadToCart2"))||[];
      var cart3 =JSON.parse(localStorage.getItem("aadToCart3"))||[];

      var totalI=cart1.length+cart2.length+cart3.length;
      document.querySelector("#itemA").textContent=totalI;
  