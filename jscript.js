// Função para mostrar a mensagem surpresa
document.getElementById("surpriseButton").addEventListener("click", function() {
    var message = document.getElementById("surpriseMessage");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});
