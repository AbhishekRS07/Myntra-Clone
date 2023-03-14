var login= localStorage.getItem("login") || false;


if(login){

   document.getElementById("dropout").style.display= "none"

   document.getElementById("dropin").style.display="block"

    document.getElementById("profile").textContent= "Masai"
}



document.getElementById("logout").addEventListener("click", logout)

function logout(){

    localStorage.removeItem("login")
    window.location.reload()
}