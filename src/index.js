import "./style.css";
import createDropDown from "./drop-down.js";
import menuIcon from "./images/menu-icon.svg";

const dropDownMenu = createDropDown(
  "Cars",
  ["Volvo", "Volkswagen", "Porsche"],
  menuIcon
);

document.body.appendChild(dropDownMenu);
