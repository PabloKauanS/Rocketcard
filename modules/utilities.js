export function eventLister(element, fc) {
  ["touchstart", "click"].forEach((i) => {
    element.addEventListener(i, fc);
  });
}
export function closeModal() {
  document.querySelector("[data-modal-bg]").style.display = "none";
}
export function loading() {
  const element = document.createElement("div");
  element.innerHTML = `<div class="loading"><div></div><div></div><div></div><div></div></div>`;
  return element.querySelector(".loading");
}
