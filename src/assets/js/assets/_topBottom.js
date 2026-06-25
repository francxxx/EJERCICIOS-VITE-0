export default function topBottom() {
  const $btnTop = document.createElement("button");
  $btnTop.className = "fab-button hidden";

  $btnTop.innerHTML = `
  <i class="fa-solid fa-arrow-up"></i>
  `;

  $btnTop.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 600) {
      $btnTop.classList.remove("hidden");
      $btnTop.classList.add("show");
    } else {
      $btnTop.classList.add("hidden");
      $btnTop.classList.remove("show");
    }
  });

  return $btnTop;
}
