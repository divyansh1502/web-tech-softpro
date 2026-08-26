//Task 1

let inp = document.querySelector("input");
inp.addEventListener("input", function(dets) {
    if(dets.data !== null) {
        console.log(dets.data);
    }
})

//Task 2

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent=`${dets.target.value} device selected`
})

//Task 3

let main = document.querySelector("#main");
let h2 = document.querySelector("h2");

window.addEventListener("keydown", function(dets){
    if(dets.key === " ") {
        h2.textContent="SPC";
    } else {
        h2.textContent=dets.key;
    }
})

//Task 4

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click();
})
fileinp.addEventListener("change", function(dets) {
    const file = dets.target.files[0];
    if(file) {
        btn.textContent=file.name;
    }
})