import { eventShipsHanlders, getName } from "./inputGrid";
import { mainDOM, showInputDialog } from "./mainDOM";
import { createDialog } from "./startDialog";
import "./style.css";

const content = document.querySelector("#content");

const showBody = function (playerGrid) {
  let head = document.createElement("h1");
  head.innerText = "BATTLESHIP";
  head.setAttribute("id", "header");

  content.appendChild(head);
  content.appendChild(mainDOM(playerGrid));
};

const takeGridInput = function () {
  const dialog = showInputDialog();
  content.appendChild(dialog);
  dialog.showModal();
  eventShipsHanlders();
  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let grid = dialog.querySelector("#playerBoard");
    dialog.close();
    dialog.querySelector("form").reset();
    content.removeChild(dialog);
    showBody(grid);
  });
};

const start = (function () {
  const dialog = createDialog();
  content.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    getName(document.getElementById("playerName").value);
    dialog.close();
    dialog.querySelector("form").reset();
    content.removeChild(dialog);
    takeGridInput();
  });
})();
