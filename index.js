let val = document.querySelectorAll(".boxGrid>div");
val.forEach((el) => {
  el.addEventListener("click", addVal);
});
let bag = "";
function addVal(event) {
  let targetV = event.target.innerText;

  if (targetV == "C") {
    bag = "";
    document.querySelector(".inputBox").innerText = bag;
  } else if (targetV == "=") {
    document.querySelector(".inputBox").innerText = eval(bag);
  } else {
    bag += targetV;
    document.querySelector(".inputBox").innerText = bag;
  }
}
let valL = document.querySelectorAll(".boxGridL>div");
valL.forEach((el) => {
  el.addEventListener("click", compare);
});
let ans = "";
function compare(event) {
  let targetL = event.target.innerText;

  if (targetL == "Enter") {
    let min = +document.querySelector("#minVal").innerText;
    let max = +document.querySelector("#maxVal").innerText;
    if (+ans < min) {
      document.querySelector("#minVal").innerText = ans;
    } else if (+ans > max) {
      document.querySelector("#maxVal").innerText = ans;
    }
  } else if (targetL == "C") {
    ans = "";
    document.querySelector(".inputBoxL").innerText = ans;
  } else {
    ans += targetL;
    document.querySelector(".inputBoxL").innerText = ans;
  }
}
