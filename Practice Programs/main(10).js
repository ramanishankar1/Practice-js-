let btn = document.getElementById('eliminate')
let divi = document.getElementById('div')

function remove(){
    divi.removeChild(divi.lastChild)
}

btn.addEventListener("click",remove)