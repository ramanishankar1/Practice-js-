 let button=document.getElementById("button")

 let name1= "Ramani"

 button.addEventListener("click" , function(){
    let nameText = document.getElementById("name")
    nameText.innerText = nameText.innerText+" "+name1
 })

