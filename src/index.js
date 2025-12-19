import "./drop-down-style.css";
import createDropDown from "./drop-down.js";
import menuIcon from "./images/menu-icon.svg";

const dropDownMenu = createDropDown(
  "Cars",
  ["Volvo", "Volkswagen", "Porsche"],
  "300px",
  menuIcon
);

const dropDownMenu2 = createDropDown(
  "Options",
  ["Create", "Read", "Update", "Delete"],
  "300px",
  menuIcon
);

const text = document.createElement("h2");
text.textContent = "This text should be covered.";
text.style.marginBottom = "200px";

document.body.appendChild(dropDownMenu);
document.body.appendChild(text);
document.body.appendChild(dropDownMenu2);
