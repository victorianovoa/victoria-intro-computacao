
const pagesOrder = [
  "page1",
  "page2",
  "decade70s",
  "decade80s",
  "decade90s"
];

let currentIndex = 0;

function showPage(index) {
  if(index < 0) index = pagesOrder.length - 1;
  if(index >= pagesOrder.length) index = 0;
  currentIndex = index;

  pagesOrder.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove("active");
  });

  const currentPage = document.getElementById(pagesOrder[currentIndex]);
  if(currentPage) currentPage.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showPage(currentIndex);

  // Navegação por botões principais
  document.querySelectorAll("button.btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");
      if(target && pagesOrder.includes(target)) {
        showPage(pagesOrder.indexOf(target));
      }
    });
  });

  // Navegação por setas do mouse
  document.getElementById("prevBtn").addEventListener("click", () => {
    showPage(currentIndex - 1);
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    showPage(currentIndex + 1);
  });

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") {
      showPage(currentIndex - 1);
    } else if(e.key === "ArrowRight") {
      showPage(currentIndex + 1);
    }
  });
});
