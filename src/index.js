import { checkShipLength, eventShipsHanlders, getName } from "./inputGrid";
import { createDialog, mainDOM, showInputDialog } from "./mainDOM";
import { computerEventListener } from "./game";
import "./style.css";

const content = document.querySelector("#content");

const showBody = function (playerGrid) {
  let head = document.createElement("h1");
  head.innerText = "BATTLESHIP";
  head.setAttribute("id", "header");

  content.appendChild(head);
  content.appendChild(mainDOM(playerGrid));
  computerEventListener();
};

const takeGridInput = function () {
  const dialog = showInputDialog();
  content.appendChild(dialog);
  dialog.showModal();
  eventShipsHanlders();
  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkShipLength() === 0) {
      let grid = dialog.querySelector("#playerBoard");
      dialog.close();
      dialog.querySelector("form").reset();
      content.removeChild(dialog);
      showBody(grid);
    }
  });
};

export const start = function () {
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
};

start();
