document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    menuIcon.addEventListener("click", function() {
        sidebar.style.width = "250px";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
    });

    closeBtn.addEventListener("click", function() {
        sidebar.style.width = "0";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    });
    
    overlay.addEventListener("click", function(event) {
        sidebar.style.width = "0";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    });
});

document.getElementById('close-page').addEventListener('click', function() {
    window.close();
});

