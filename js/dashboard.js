export function dashboard() {
  const dropdownForm = document.querySelectorAll("#dropdown");
  const exporting = document.querySelector(".export");

  exporting.addEventListener("click", (e) => {
    e.preventDefault();
  });

  console.log(exporting);

  dropdownForm.forEach((e) => {
    e.addEventListener("click", function dropdown() {
      this.classList.toggle("active");
    });
  });
}
