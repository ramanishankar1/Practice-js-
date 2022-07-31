var toggleTxt = document.getElementById("toggle-text")
var toggleBtn = document.getElementById("toggle-button")
var flag=2;
var handletog = function () {
    if (flag==3) {
        
        toggleTxt.style.visibility = "visible"
        flag=2;
    }

    else if (flag==2) {
        toggleTxt.style.visibility = "hidden"
        flag=3;
    }
}
    toggleBtn.addEventListener("click", handletog)
