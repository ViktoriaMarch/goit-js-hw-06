const inEl = document.querySelector("#validation-input");
const inData = inEl.getAttribute('data-length');

const fc = () => {
    if (inEl.value.length === Number(inData)) {
return inEl.classList.add("valid")
    }
return inEl.classList.add("invalid");
}

inEl.addEventListener("blur", fc);