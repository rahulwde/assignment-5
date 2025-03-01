let count = 0;
const history = document.getElementById("history");
const completedButtons = document.querySelectorAll(".completed");
for (let completedButton of completedButtons) {
  completedButton.addEventListener("click", function (e) {
    const button = e.target;
    button.disabled = true;
    button.classList.add("bg-gray-200", "text-gray-500");
    alert("Board Update Successfully");
    count++;
    if (count === completedButtons.length) {
      alert("Congrats! You have completed all the current task");
    }
    const task = parseInt(document.getElementById("task").innerText);
    document.getElementById("task").innerText = task - 1;
    const checkOut = parseInt(document.getElementById("checkout").innerText);
    document.getElementById("checkout").innerText = checkOut + 1;

    let parent = e.target.parentNode;
    let grandParent = parent.parentNode;
    let title = grandParent.children[1].innerText;
   

    const time = new Date();
    const newTime = time.toLocaleTimeString();

    const p = document.createElement("div");
    p.innerHTML = `<p class="mt-5 p-2 text-center bg-gray-200 rounded-lg font-semibold">You have completed the task ${title} ${newTime}</p>`;
    history.appendChild(p);

    const clear = document.getElementById("clear-history");
    clear.addEventListener("click", function () {
      p.innerHTML = "";
    });
  });
}
const date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = [
  "January","February","March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthName = months[date.getMonth()]
const day = days[date.getDay()]
const dates = date.getDate();
const year = date.getFullYear();
document.getElementById("getdate").innerText =
  day + " " + monthName + " " + dates + " " + year;

const newPage = document.getElementById("new-page");
newPage.addEventListener("click", function () {
  window.location.href = "./js.html";
});

document.getElementById("theme").addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(r, g, b);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});


