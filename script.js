function entrar(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const senha =(document.querySelector("#senha")).value;

    if (email === "login@gmail.com" && senha === "1234"){
        window.location.href ="index2.html";
    }else {
        alert("Login errado")
    }
}