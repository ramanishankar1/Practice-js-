let togglebutton = document.querySelectorAll(".toggle-btn");
let toggletext = document.querySelectorAll(".toggle-txt");
var colors = ["red", "blue", "green", "yellow"];
var flag = 0;

var handletog = function () {

    this.previousElementSibling.style.color = colors[flag];
    flag++;
    if (flag == colors.length) {
        flag = 0;
      }
    }


togglebutton.forEach(function (togglebtn) {
    togglebtn.addEventListener("click", handletog)
});
