const peeps = document.querySelector("#peeps");
const btn1 = document.querySelector("#randomize")
const clear = document.querySelector("#clear")

btn1.addEventListener("click", randomize);
function randomize(){
    const num = Math.floor(Math.random() * (peeps.children.length));
    peeps.children[num].setAttribute("class", "col-3 bg-danger text-white text-center border m-2 P-2 h1")
}

clear.addEventListener("click", refresh);
function refresh() {
    window.location.reload()
}