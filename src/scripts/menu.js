function toggleMenu() {
    var x = document.getElementById("mobile-menu-item"); // get every element with the id "mobile-menu-item" which are all of our ul li elements in the header
    if (x.style.display === "block") {  
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}