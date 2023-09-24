export function dashboardBidding() {
  const dropdownForms = document.querySelectorAll("#dropdown");
  const selectOptions = document.querySelectorAll(
    "[data-modality], [data-situation], [data-mounth], [data-year]"
  );

  function performSearch() {
    const searchQuery = document
      .querySelector("#search-term")
      .value.toLocaleLowerCase();
    const modalityQuery = document
      .querySelector("#modality")
      .lastElementChild.value.toLocaleLowerCase();
    const situationQuery = document
      .querySelector("#situation")
      .lastElementChild.value.toLocaleLowerCase();
    const mounthQuery = returnMounth(
      document.querySelector("#mounth").lastElementChild.value
    );
    const yearQuery = document
      .querySelector("#year")
      .lastElementChild.value.toLocaleLowerCase();

    const arrayQuery = [modalityQuery, situationQuery, mounthQuery, yearQuery];

    const notNullQuerys = [];

    arrayQuery.forEach((query) => {
      if (query != "" && query != undefined) {
        notNullQuerys.push(query);
      }
    });

    const rows = document.querySelectorAll(".dashboard-row");

    rows.forEach((row) => {
      const rowNumber = row
        .querySelector(".dashboard-number-row p")
        .textContent.toLocaleLowerCase();
      const rowModality = row
        .querySelector(".dashboard-modality-row p")
        .textContent.toLocaleLowerCase();
      const rowDate = row.querySelector(".dashboard-date-row p").textContent;
      const rowSituation = row
        .querySelector(".dashboard-situation-row p")
        .textContent.toLocaleLowerCase();

      const actualRow = [];
      actualRow.push(rowModality);
      actualRow.push(rowSituation);
      actualRow.push(rowNumber);
      actualRow.push(rowDate);

      let confirmRow = [];

      if (searchQuery != "") {
        let found = false;
        for (let colunm of actualRow) {
          if (colunm.includes(searchQuery)) {
            row.style.display = "grid";
            found = true;
            break;
          }
        }
        if (!found) {
          row.style.display = "none";
        }
      } else {
        for (let i = 0; notNullQuerys.length > i; i++) {
          for (let n = 0; actualRow.length > n; n++) {
            if (actualRow[n].includes(notNullQuerys[i])) {
              confirmRow.push(true);
              break;
            }
          }
        }
        if (confirmRow.length == notNullQuerys.length) {
          row.style.display = "grid";
        } else {
          row.style.display = "none";
        }
      }
    });
  }

  //Dropdowns for the forms actions
  dropdownForms.forEach((form) => {
    form.addEventListener("click", (e) => {
      form.classList.toggle("active");
      if (form.classList.contains("dashboard-details-row")) {
        form.nextElementSibling.classList.toggle("active");
      }
      if (form.classList.contains("export")) {
        e.preventDefault();
      }
    });
  });

  //Select dropdown action
  /*This code section is very "hard" to change because it`s 
  intrinsically linked to the page's HTML template, so, a
  ny chnage in html or the code will resulte 
  in an error*/
  function activeOption(e) {
    const parentChildren = Array.from(this.parentElement.children);
    const selectInput = (this.parentElement.lastElementChild.value =
      this.textContent);

    parentChildren.forEach((element) => element.classList.remove("selected"));

    const selectedElement = e.target;
    selectedElement.classList.add("selected");
    //change the placeholder of the previous element
    this.parentElement.previousElementSibling.firstElementChild.textContent =
      selectedElement.textContent;
  }

  function returnMounth(mounth) {
    const mounths = {
      Janeiro: "01",
      Fevereiro: "02",
      Março: "03",
      Abril: "04",
      Maio: "05",
      Junho: "06",
      Julho: "07",
      Agosto: "08",
      Setembro: "09",
      Outubro: "10",
      Novembro: "11",
      Dezembro: "12",
    };

    const numericMounth = mounths[mounth];

    if (numericMounth !== undefined) {
      return numericMounth;
    }
  }

  selectOptions.forEach((option) => {
    option.addEventListener("click", activeOption);
  });

  document.querySelector("#submit").addEventListener("click", function () {
    performSearch();
  });
}
