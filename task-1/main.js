var coll = document.getElementsByClassName('collapse-btn');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function adjustPageSize() {
    const screen_width = window.innerWidth;
    console.log(screen_width);
    

    if (screen_width > 0 && screen_width <= 600) {
        document.body.style.transform = "scale(0.5)";
    } else if (screen_width > 600 && screen_width <= 700) {
        document.body.style.transform = "scale(0.75)";
    } else if (screen_width > 700 && screen_width <= 767) {
        document.body.style.transform = "scale(0.8)";
    } else if (screen_width > 992 && screen_width <= 1500) {
        document.body.style.transform = "scale(0.9)";
    } 
        
}

window.addEventListener("resize", adjustPageSize);
adjustPageSize();