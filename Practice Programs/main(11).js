let togglebtns = document.querySelectorAll(".toggle-btn");
let toggletxts = document.querySelectorAll(".toggle-txt");
var colors = ["red", "blue", "green", "yellow"];
var flag = 0;

var handletog = function () {
       
        this.previousElementSibling.style.color = colors[flag]
        flag++
        if(flag==colors.length-1)
        {
        flag=0
        }
    }


togglebtns.forEach(function (togglebtn) {
    togglebtn.addEventListener("click", handletog)
}
)
