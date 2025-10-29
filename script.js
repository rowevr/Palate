// 1) Toggle images on/off for each card
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".toggle-img");
  if (!btn) return;
  const targetSel = btn.getAttribute("data-target");
  const img = document.querySelector(targetSel);
  if (!img) return;
  img.classList.toggle("d-none");
});

// 2) Simple "Add to Cart" popup (no backend)
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;
  const id = btn.getAttribute("data-id") || "item";
  alert(`Added ${id} to cart!`);
});
