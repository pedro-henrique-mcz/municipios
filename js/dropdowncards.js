export function dropDownCards() {
  const cards = document.querySelectorAll(".dropdown-card");

  function dropDownClick(e) {
    const dropdown = this.querySelector(".dropdown-list");
    const isDropdownClicked = dropdown.contains(e.target);

    if (!isDropdownClicked) {
      this.classList.toggle("none");
      this.classList.toggle("active");
    } else {
      e.stopPropagation();
    }
  }

  function dropDownLeave() {
    if (this.classList.contains("active")) {
      this.classList.toggle("active");
      this.classList.toggle("none");
    }
  }

  cards.forEach((card) => {
    card.addEventListener("click", dropDownClick);
    card.addEventListener("mouseleave", dropDownLeave);
  });
}
