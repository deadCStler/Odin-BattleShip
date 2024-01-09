import { createGrid } from "./mainDOM";

export const showInputDialog = function () {
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let form = document.createElement("form");
  form.setAttribute("id", "gridForm");

  let div = document.createElement("div");
  div.textContent = "Drag the ships on the board below.";

  let gridDiaBody = document.createElement("div");
  gridDiaBody.classList.add("gridDiaBody");

  let ships = document.createElement("div");
  ships.classList.add("dragShips");

  let ship1 = document.createElement("div");
  ship1.innerHTML = "StealthWave (L2)";
  ship1.setAttribute("id", "ship1");
  ship1.setAttribute("draggable", "true");

  let ship2 = document.createElement("div");
  ship2.innerHTML = "Thunderbolt (L3)";
  ship2.setAttribute("id", "ship2");
  ship2.setAttribute("draggable", "true");

  let ship3 = document.createElement("div");
  ship3.innerHTML = "SeaViper (L4)";
  ship3.setAttribute("id", "ship3");
  ship3.setAttribute("draggable", "true");

  let ship4 = document.createElement("div");
  ship4.innerHTML = "SwiftStrike (L5)";
  ship4.setAttribute("id", "ship4");
  ship4.setAttribute("draggable", "true");

  ships.appendChild(ship1);
  ships.appendChild(ship2);
  ships.appendChild(ship3);
  ships.appendChild(ship4);

  let axis = document.createElement("button");
  axis.textContent = "Change Axis";
  axis.setAttribute("type", "button");

  ships.appendChild(axis);

  let grid = createGrid();
  grid.setAttribute("id", "playerBoard");

  let gridItems = grid.querySelectorAll("div");

  //   gridItems.forEach((gridItem) =>
  //     gridItem.addEventListener("mouseover", () => {
  //       console.log(gridItem);
  //     })
  //   );

  //   gridItems.forEach((gridItem) =>
  //     gridItem.addEventListener("mouseout", () => {
  //       //   console.log(gridItem);
  //     })
  //   );

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.setAttribute("type", "submit");

  gridDiaBody.appendChild(grid);
  gridDiaBody.appendChild(ships);

  form.appendChild(div);
  form.appendChild(gridDiaBody);
  form.appendChild(submitButton);

  dialog.appendChild(form);

  return dialog;
};
