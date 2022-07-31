function addName(){
    var node=document.createElement("li");
   var textnode= document.createTextNode("Muthu");
   node.appendChild(textnode);
   document.getElementById("myList").appendChild(node);
}
