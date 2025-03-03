function entrar(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const senha =(document.querySelector("#senha")).value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos");
    } else if (email === "rafael_63_@hotmail.com" && senha === "1234") {
        window.location.href = "index2.html"; 
    } else {
        alert("Login errado");
    }
}