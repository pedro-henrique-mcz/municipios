export function cards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", activeExternalLink);
    card.addEventListener("mouseenter", activeVector);
    card.addEventListener("mouseleave", desactiveVector);
  });

  function activeVector() {
    const vetor = this.querySelector(".vetor");
    vetor.src = "img/icons/vector-card-active.png";
  }

  function desactiveVector() {
    const vetor = this.querySelector(".vetor");
    vetor.src = "img/icons/card-vector-desactive.png";
  }

  function activeExternalLink() {
    if (this.hasAttribute("data-link")) {
      const newURL = this.dataset.link;
      window.location.href = newURL;
    }
  }
}
