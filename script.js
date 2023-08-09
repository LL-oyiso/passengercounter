let count = 0
let countEl = document.getElementById("count-el");

function increment(){
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

let saveEl = document.getElementById("save-el");

function save(){
   let svcount= count + "-"
    saveEl.textContent += svcount
    count = 0
    countEl.textContent = 0
}