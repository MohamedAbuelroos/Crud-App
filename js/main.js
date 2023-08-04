let icon = document.querySelector(".icon");
let form = document.forms[0];
let close = document.querySelector(".close");
let submit = document.querySelector(".btn input");
let inputs = document.querySelectorAll(".data input");
let productContainer = document.querySelector(".product-container");
let msg = document.createElement("span");
msg.innerHTML = "No Product Available";
let reset = document.querySelector("[type = reset]");

icon.onclick = function () {
  icon.style.backgroundColor = "rgba(253,187,45,1)";
  icon.style.transform = "rotate(180deg)";
  form.style.visibility = "visible";
};
close.onclick = function () {
  form.style.visibility = "hidden";
  icon.style.backgroundColor = "#2d2efde0";
  icon.style.transform = "rotate(0deg)";
};

submit.addEventListener("click", function () {
  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === "" ||
    inputs[3].value === ""
  ) {
    alert("Please Fill All Fields!");
  } else {
    let card = document.createElement("div");
    card.className = "card";
    let imageContainer = document.createElement("div");
    imageContainer.className = "image";
    let image = document.createElement("img");
    image.src = document.querySelector("[name = url]").value;
    image.alt = "Mobile Photo";
    imageContainer.appendChild(image);
    let info = document.createElement("div");
    info.className = "info";
    let modelPara = document.createElement("p");
    let modelText = document.createTextNode(`Model : ${inputs[0].value}`);
    modelPara.appendChild(modelText);
    let namePara = document.createElement("p");
    let nameText = document.createTextNode(`Name : ${inputs[1].value}`);
    namePara.appendChild(nameText);
    let number = document.querySelector("[name = pieces]");
    let piecesPara = document.createElement("p");
    let piecesText = document.createTextNode(`Pieces : ${number.value}`);
    piecesPara.appendChild(piecesText);
    info.prepend(modelPara);
    info.append(namePara);
    info.append(piecesPara);
    card.prepend(imageContainer);
    card.append(info);
    productContainer.appendChild(card);
    let deleteBtn = document.createElement("button");
    let deletText = document.createTextNode("Delete");
    deleteBtn.appendChild(deletText);
    deleteBtn.className = "delete";
    card.prepend(deleteBtn);
    deleteBtn.onclick = function () {
      let confirmMsg = confirm("Are You Sure");
      if (confirmMsg === true) {
        this.parentElement.remove();
      }
      if (productContainer.innerHTML === "") {
        productContainer.append(msg);
      }
    };

    let soldBtn = document.createElement("button");
    let soldText = document.createTextNode("Sold");
    soldBtn.appendChild(soldText);
    soldBtn.className = "soldbtn";
    card.prepend(soldBtn);
    soldBtn.addEventListener("click", function () {
      let promptMsg = prompt("How Many Pieces You Sold?");
      let number = piecesPara.innerHTML.split(" ")[2] - promptMsg;
      piecesPara.innerHTML = `Pieces : ${number}`;
      if (number <= 0) {
        soldBtn.style.filter = "grayscale(100%)";
        image.style.filter = "grayscale(100%)";
        soldBtn.disabled = true;
        piecesPara.innerHTML = `All Sold`;
      }
    });
    msg.remove();
    resetp();
  }
});
submit.onclick = function (e) {
  e.preventDefault();
};
productContainer.append(msg);

function resetp() {
  reset.click();
}
