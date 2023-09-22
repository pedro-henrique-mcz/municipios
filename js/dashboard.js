export function dashboard() {
  const dropdownForms = document.querySelectorAll("#dropdown");
  const selects = document.querySelectorAll(".select");

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
      if (
        form.classList.contains("dashboard-description-row-button") ||
        form.classList.contains("dashboard-details-row")
      ) {
        form.nextElementSibling.classList.toggle("active");
      }
      if (form.classList.contains("export")) {
        e.preventDefault();
      }
    });
  });

  /*Research system*/
  function performSearch(dataContent, dataType) {
    /*Input text search*/
    let searchQuery = document.querySelector("#search-term").value;

    if (searchQuery) {
      if (cleanInput(searchQuery) !== "") {
        searchQuery = cleanInput(searchQuery);
      } else {
        searchQuery = searchQuery.toLowerCase();
      }
    }

    /*Input CPF*/
    const idQuery = document.querySelector("#search-CPF").value;
    /*Auth cpf*/
    if (idQuery) {
      if (cleanInput(idQuery) == "") {
        alert("digite um cpf valido");
      }
    }

    /*If the information is provided from year ou mounth selects*/
    const dataQuery = dataContent;
    const dataActualType = dataType;

    const rows = document.querySelectorAll(".dashboard-row");

    rows.forEach(function (row) {
      const serverEnrollment = cleanInput(
        row.querySelector(".dashboard-enrollment-row p").textContent
      );

      const serverId = cleanInput(
        row.querySelector(".dashboard-CPF-row p").textContent
      );

      const serverName = row
        .querySelector(".dashboard-servant-row p")
        .textContent.toLowerCase();

      const serverOccupation = row
        .querySelector(".dashboard-occupation-row p")
        .textContent.toLowerCase();

      if (dataQuery == null && dataActualType == null) {
        if (searchQuery.trim() != "" && idQuery.trim() != "") {
          if (
            (serverEnrollment.includes(searchQuery) ||
              serverId.includes(searchQuery) ||
              serverName.includes(searchQuery) ||
              serverOccupation.includes(searchQuery)) &&
            serverId.includes(idQuery)
          ) {
            row.style.display = "grid";
          } else {
            row.style.display = "none";
          }
        } else if (idQuery.trim() != "") {
          if (serverId.includes(idQuery)) {
            row.style.display = "grid";
          } else {
            row.style.display = "none";
          }
        } else if (searchQuery.trim() != "") {
          if (
            serverEnrollment.includes(searchQuery) ||
            serverId.includes(searchQuery) ||
            serverName.includes(searchQuery) ||
            serverOccupation.includes(searchQuery)
          ) {
            row.style.display = "grid";
          } else {
            row.style.display = "none";
          }
        } else {
          row.style.display = "grid";
        }
      } else if (dataActualType === "year") {
        if (date.includes(dataQuery)) {
          row.style.display = "grid";
        } else {
          row.style.display = "none";
        }
      } else if (dataActualType === "mounth") {
        let actualMounth = returnMounth(dataQuery);
        if (date.includes(actualMounth)) {
          row.style.display = "grid";
        } else {
          row.style.display = "none";
        }
      }
    });
  }

  function isNotNaN(value) {
    return !isNaN(value);
  }

  function cleanInput(input) {
    return input.replace(/\D/g, "").toString();
  }

  function returnMounth(mounth) {
    const mounths = {
      Janeiro: 1,
      Fevereiro: 2,
      Março: 3,
      Abril: 4,
      Maio: 5,
      Junho: 6,
      Julho: 7,
      Agosto: 8,
      Setembro: 9,
      Outubro: 10,
      Novembro: 11,
      Dezembro: 12,
    };

    const numericMounth = mounths[mounth];

    if (numericMounth !== undefined) {
      return numericMounth;
    }
  }

  document
    .querySelector("#search-term")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch(null, null);
      }
    });

  document
    .querySelector("#search-CPF")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch(null, null);
      }
    });

  const dropdownItems = document.querySelectorAll(
    ".mounth-options div, .year-options div"
  );

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (item.dataset.mounth) {
        performSearch(e.target.textContent, "mounth");
      } else if (item.dataset.year) {
        performSearch(e.target.textContent, "year");
      }
    });
  });
}
