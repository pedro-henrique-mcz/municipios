export function dropdown() {
  const dropdown = document.querySelector(".contato-dropdown");
  const dropDownContent = document.querySelector(".contato-dropdown-list");
  const imgDropDown = document.querySelector(".imgdropdown");

  dropdown.addEventListener("click", function () {
    dropdown.classList.toggle("ativo");
    dropdown.classList.toggle("desativado");

    dropDownContent.classList.toggle("none");
    imgDropDown.src = dropDownContent.classList.contains("none")
      ? "img/icons/contato-drop-down.png"
      : "img/icons/contato-dropdown-up.png";
  });
}
