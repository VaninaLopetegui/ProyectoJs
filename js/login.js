console.log("JS cargado");
document.addEventListener("DOMContentLoaded", () => {
    let inputMail = document.getElementById("inputMail");
    let inputPassword = document.getElementById("inputPassword");
    let form = document.getElementById("form");

    let usersLoggedArr = JSON.parse(sessionStorage.getItem("usersLogged")) || [];
    let passwordsLoggedArr = JSON.parse(sessionStorage.getItem("passwordsLogged")) || [];

    function userExists() {
        for (let username of usersLoggedArr) {
            if (inputMail.value === username) {
                return true;
            }
        }
        return false;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("hola!");
        if (!userExists()) {
            usersLoggedArr.push(inputMail.value);
            passwordsLoggedArr.push(inputPassword.value);

            sessionStorage.setItem('usersLogged', JSON.stringify(usersLoggedArr));
            sessionStorage.setItem('passwordsLogged', JSON.stringify(passwordsLoggedArr));
            sessionStorage.setItem('loggedConfirm', JSON.stringify(true));
            sessionStorage.setItem('username', JSON.stringify(inputMail.value));

            window.location.replace('index.html');
        }
    })
});
