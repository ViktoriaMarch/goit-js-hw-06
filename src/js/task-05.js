const inEl = document.querySelector("#name-input");
const spEl = document.querySelector("#name-output");

const fun = () => {
    if (inEl.value.trim() === "") {
        spEl.textContent = "Anonymous!";
    } 
    spEl.textContent = inEl.value ;
  
}


inEl.addEventListener("input", fun);

