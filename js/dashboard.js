export function dashboard() {
  const dropdownForms = document.querySelectorAll("#dropdown");
  const exporting = document.querySelector(".export");
  const selects = document.querySelectorAll(".select");

  /*Dropdowns page */
  dropdownForms.forEach((form) => {
    form.addEventListener("click", () => {
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
    });
  });

  /*Research system*/
  // Function to perform the search
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
        row.style.display = "grid"; // Display the row if nothing is searched
      } else if (title.includes(searchQuery) || date.includes(searchQuery)) {
        row.style.display = "grid"; // Display the row if it matches the search query
      } else {
        row.style.display = "none"; // Hide the row if it doesn't match the search query
      }
    });
  }

  // Add an event listener for the Enter key
  document
    .querySelector("#search-term")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });

  // Add event listeners for month and year dropdown selections
  const dropdownItems = document.querySelectorAll(
    ".mounth-options div, .year-options div"
  );
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      performSearch();
    });
  });

  exporting.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
