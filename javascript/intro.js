document.addEventListener("DOMContentLoaded", () => {
    console.log("Intro script loaded");

    // Wait 2.5 seconds before redirecting to index.html
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 2500); 
});
