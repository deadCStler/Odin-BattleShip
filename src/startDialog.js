export const createDialog = function () {
  let dialog = document.createElement("dialog");
  dialog.classList.add("details");

  let form = document.createElement("form");
  form.setAttribute("id", "detailsForm");

  let div = document.createElement("div");

  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "playerName");
  titleLabel.innerHTML = "Enter Player's Name";

  let titleInput = document.createElement("input");
  titleInput.setAttribute("id", "playerName");
  titleInput.setAttribute("name", "playerName");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "true");

  div.appendChild(titleLabel);
  div.appendChild(titleInput);

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";

  form.appendChild(div);
  //   form.appendChild(grid);
  form.appendChild(submitButton);

  dialog.appendChild(form);

  return dialog;
};
