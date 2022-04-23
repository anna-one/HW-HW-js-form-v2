const arrayOfLi = [];
const buttonClick = document.getElementById("buttonAdd");
const list = document.getElementById("listCheck");
const inputItem = document.getElementById("inputText");
const validateInput = document.querySelector("#inputText");
const errorMes = document.getElementById('errorMes');



buttonClick.addEventListener("click", () => {

  if (/\w[0-9]/.test(validateInput.value)) {
    arrayOfLi.push({ value: inputItem.value, completed: false });
    inputItem.style.borderColor = "green";
    errorMes.innerHTML = '';

    renderList();
  } else {
    inputItem.style.borderColor = "red";
    errorMes.innerHTML = 'Error';
  };
});

const renderList = () => {
  list.innerHTML = "";

  arrayOfLi.forEach((item) => {
    const addLi = document.createElement("li");
    addLi.classList.add("itemList");

    if (item.completed) {
      addLi.classList.add("completed");
    }

    inputItem.value = "";

    const p = document.createElement("p");
    p.innerText = item.value;

    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";

    addLi.append(p);
    addLi.append(buttonDelete);

    addLi.addEventListener("click", (event) => {
      item.completed = !item.completed;
      event.target.classList.toggle("completed");
    });

    buttonDelete.addEventListener("click", (event) => {
      arrayOfLi.splice(arrayOfLi.indexOf(item.value), 1);

      renderList();
    });

    buttonDelete.classList.add("buttonDelete");

    list.append(addLi);
  });
};

inputItem.addEventListener("blur", () => {
  inputItem.style.background = "#191919";
});

inputItem.addEventListener("focus", () => {
  inputItem.style.background = "#454545";
  inputItem.style.color = "#ffffff";
});
