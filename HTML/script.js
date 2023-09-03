function changeFont() {
    let currentFont = document.body.style.fontFamily
    if (currentFont == "monospace" || currentFont == "") {
        document.body.style.fontFamily = "arial";
    } else {
        document.body.style.fontFamily = "monospace";
    };
    
    
}