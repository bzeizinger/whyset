document.addEventListener("DOMContentLoaded", function() {
    let cookieOverlay = document.getElementById("cookies");
    let cookieBtn = document.getElementById("accept");

    cookieBtn.addEventListener("click", function() {
        cookieOverlay.style.display = "none";
    });
});
