myitem2 = document.getElementById("image",);
let imageSizeToggle = 0;
    myitem2.addEventListener("click", onClick);
    function onClick() {  
        if (imageSizeToggle == 0) {
            imageSizeToggle = 1
            myitem2.style.width = "500px";
            myitem2.style.height = "400px";
        } else {
            imageSizeToggle = 0
            myitem2.style.width = "400px";
            myitem2.style.height = "300px";
        }
}

