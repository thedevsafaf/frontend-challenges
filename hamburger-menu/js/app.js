window.addEventListener("load", (event) => {
    document.getElementById("menu-icon").addEventListener("click",() => {
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    });
    document.querySelector("span.close").addEventListener("click",() => {
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active"); 
    });
    document.querySelector("span.overlay").addEventListener("click",() => {
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    });
});