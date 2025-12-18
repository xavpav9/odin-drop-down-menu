import "./style.css";
import createDropDown from "./drop-down.js";

const dropDownMenu = createDropDown("Cars", ["Volvo", "Volkswagen", "Porsche"])

document.body.appendChild(dropDownMenu)
