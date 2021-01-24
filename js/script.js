const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];
// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
console.log(cat.complain);

//question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

//question 7

function listFunction(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
listFunction(cats);

//question 8

var catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    catContainer.innerHTML =
      catContainer.innerHTML +
      `<div class="pet-container">
                        <h5>Name: ${cats[i].name}</h5>
                        <p>Age: ${cats[i].age || "Age unknown"}</p>
                        </div>`;
  }
}
createCats(cats);
