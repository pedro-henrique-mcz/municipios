export function dashboard() {
  const dropdownForms = document.querySelectorAll("#dropdown");
  const selects = document.querySelectorAll(".select");
  const search = document.querySelector(".search");

  search.addEventListener("click", e);

  /*Dropdowns page */
  dropdownForms.forEach((form) => {
    form.addEventListener("click", (e) => {
      if (form.classList.contains("active")) {
        form.classList.toggle("active");
      } else {
        selects.forEach((select) => {
          select.classList.remove("active");
        });
        form.classList.toggle("active");
      }
      if (form.classList.contains("dashboard-description-row-button")) {
        form.nextElementSibling.classList.toggle("active");
      }
      if (form.classList.contains("export")) {
        e.preventDefault();
      }
      console.log(e.target);
    });
  });

  /*Research system*/
  function performSearch() {
    const searchQuery = document
      .querySelector("#search-term")
      .value.toLowerCase();

    const rows = document.querySelectorAll(".dashboard-row");

    rows.forEach(function (row) {
      const title = row
        .querySelector(".dashboard-title-row p")
        .textContent.toLowerCase();
      const date = row
        .querySelector(".dashboard-data-row p")
        .textContent.toLowerCase();

      if (searchQuery === "") {
        row.style.display = "grid";
      } else if (title.includes(searchQuery) || date.includes(searchQuery)) {
        row.style.display = "grid";
      } else {
        row.style.display = "none";
      }
    });
  }

  document
    .querySelector("#search-term")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });

  const dropdownItems = document.querySelectorAll(
    ".mounth-options div, .year-options div"
  );
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      performSearch();
    });
  });
}
