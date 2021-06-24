const buttonCopy = document.getElementById("button-copy") ;
buttonCopy.addEventListener("click", function() {
    let copy = document.getElementById("copytext");
    copy.select();
    document.execCommand("copy");
});
