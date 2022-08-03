const inEl = document.querySelector("#font-size-control");
const spEl = document.querySelector("#text");

const func = (event) => {
    spEl.style.fontSize = event.target.value+"px";
}

inEl.addEventListener("input", func);