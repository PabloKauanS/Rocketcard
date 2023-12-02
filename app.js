import { eventLister, closeModal, loading } from "./modules/utilities.js";
import addInfo from "./modules/addInfo.js";
import API from "./modules/API.js";

const btn_close = document.querySelector("[data-btn-close]");
eventLister(btn_close, closeModal);

const btn_send = document.querySelector("[data-btn-submit]");
eventLister(btn_send, sendName);

async function sendName(i) {
  const target = i.target;
  startAnima(target);
  const input_name = document.querySelector("#ml-input").value;
  const data_user = await API(input_name);
  if (!data_user) return stopAnima(target);
  addInfo(data_user);
  document.querySelector("[data-avatar]").onload = closeModal;
}

function startAnima(t) {
  t.style.display = "none";
  document.querySelector("[data-modal]").appendChild(loading());
}
function stopAnima(t) {
  document.querySelector(".loading").remove();
  t.style.display = "block";
}