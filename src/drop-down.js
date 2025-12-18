function createDropDown(name, items, menuIcon = null) {
  const dropDownDiv = document.createElement("div");
  dropDownDiv.classList.add("drop-down");

  const dropDownBtn = document.createElement("button");
  const dropDownBtnSpan = document.createElement("span");
  dropDownBtn.classList.add("drop-down-btn");
  dropDownBtnSpan.textContent = name;
  dropDownBtn.appendChild(dropDownBtnSpan);
  if (menuIcon !== null) {
    const dropDownBtnImg = document.createElement("img");
    dropDownBtnImg.src = menuIcon;
    dropDownBtn.appendChild(dropDownBtnImg);
  }
  dropDownDiv.appendChild(dropDownBtn);

  const itemsDiv = document.createElement("div");
  itemsDiv.classList.add("drop-down-items");
  for (const item of items) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("drop-down-item");
    itemDiv.textContent = item;

    itemsDiv.appendChild(itemDiv);
  }
  dropDownDiv.appendChild(itemsDiv);

  return dropDownDiv;
}

export default createDropDown;
