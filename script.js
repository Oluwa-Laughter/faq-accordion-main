"use-strict";

const faqContainer = document.querySelectorAll(".faq-container");
const faq = document.querySelectorAll(".faq");

faq.forEach((click) => {
  click.addEventListener("click", () => {
    const btnOpen = click.querySelector(".open-btn");
    const btnClose = click.querySelector(".close-btn");

    btnOpen.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");
  });
});

faqContainer.forEach((click) => {
  const faq = click.querySelector(".faq");
  const answer = click.querySelector(".answer");

  faq.addEventListener("click", () => {
    answer.classList.toggle("hidden");
  });
});
