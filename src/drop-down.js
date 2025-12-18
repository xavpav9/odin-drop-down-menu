function createDropDown(name, items) {
  const dropDownDiv = document.createElement("div");
  dropDownDiv.classList.add("drop-down");

  const dropDownBtn = document.createElement("button");
  dropDownBtn.classList.add("drop-down-btn");
  dropDownBtn.textContent = name;
  dropDownDiv.appendChild(dropDownBtn)

  const itemsDiv = document.createElement("div");
  itemsDiv.classList.add("drop-down-items");
  for (const item of items) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("drop-down-item");
    itemDiv.textContent = item;

    itemsDiv.appendChild(itemDiv)
  }
  dropDownDiv.appendChild(itemsDiv);

  return dropDownDiv;

}

export default createDropDown;
