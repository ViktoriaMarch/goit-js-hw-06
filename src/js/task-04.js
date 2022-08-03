let counterValue = 0;

const count = document.querySelector("#counter");
const plus = count.firstElementChild;
const minus = count.lastElementChild;
const val = document.querySelector("#value");

const up = () => {
   counterValue -=1;
   val.textContent = counterValue;
}

const down = () => {
counterValue += 1;
val.textContent = counterValue;
}

plus.addEventListener("click", up);
minus.addEventListener("click", down);
