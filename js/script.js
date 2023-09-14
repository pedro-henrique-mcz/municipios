import { search } from "./search.js";
import { dropdown } from "./dropdown.js";
import { cards } from "./cards.js";
import { dropDownCards } from "./dropdowncards.js";

document.addEventListener("DOMContentLoaded", function () {
  search();
  dropdown();
  dropDownCards();
  cards();
});
