// var text = "Just learnin' some JS";

var body = document.getElementById("body")
var colMid = document.getElementById("colMid");
var mainDiv = document.createElement("div");
var btn1 = document.createElement("button");
var div2 = document.createElement("div");
var btn2 = document.createElement("button");
var div3 = document.createElement("div");
var text2 = document.createElement("p")
var div4 = document.createElement("div");

body.setAttribute("class", "bg-secondary");

let img = document.createElement("img");
img.src = "https://placekitten.com/400/300";

colMid.appendChild(mainDiv);


mainDiv.appendChild(btn1);
btn1.textContent = "DON'T CLICK ME!";
btn1.setAttribute("class", "h3 pt-2 pb-2 pl-5 pr-5 mt-5 bg-success rounded");


mainDiv.appendChild(div2);
div2.appendChild(btn2);
btn2.textContent = ("Hellyeah!");
btn2.setAttribute("onclick","location.reload();");
btn2.setAttribute("class","h3 pt-2 pb-2 pl-5 pr-5 mt-5 bg-success rounded");



mainDiv.appendChild(div3);
div3.appendChild(text2);
text2.textContent = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
text2.setAttribute("class", "mt-5 ml-5 mr-5 h4");




mainDiv.appendChild(div4);
div4.appendChild(img);
div4.setAttribute("class", "mt-5 text-center");


    btn1.addEventListener("click", function(){
        alert("WWWOOOWWW!!! \nYou just had to click the button, didn't you?");
        img.src = "https://placebear.com/400/300"; 
        div4.appendChild(img);
        
        
    });
 