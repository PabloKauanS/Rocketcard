const btn_close = document.querySelector("[data-btn-close]");
["touchstart", "click"].forEach((i) => {
  btn_close.addEventListener(i, closeModal);
});
function closeModal() {
  document.querySelector("[data-modal-bg]").style.display = 'none';
}