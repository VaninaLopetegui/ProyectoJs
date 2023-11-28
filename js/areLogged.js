document.addEventListener("DOMContentLoaded", () =>{
    if(!sessionStorage.getItem("loggedConfirm")){
        location.href = "login.html"
        alert("Debes iniciar sesión primero!")
        return false
    }
})