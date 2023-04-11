document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");
let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
  .filter((item) =>
  item.toLowerCase().includes(inputSearch.value.toLowerCase())
  )
  .forEach((item) => addHTML (item))
}
function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("")
.then((data) => data.json())
.then((users) => {
  users.forEach((user) => {
    addHTML(user.name);
    items.push(user.name);
    
  });
})
document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});