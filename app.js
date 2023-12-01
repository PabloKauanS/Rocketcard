import { eventLister, closeModal, loading } from "./modules/utilities.js";
import addInfo from "./modules/addInfo.js";
import API from "./modules/API.js";

const btn_close = document.querySelector("[data-btn-close]");
eventLister(btn_close, closeModal);

const btn_send = document.querySelector("[data-btn-submit]");
eventLister(btn_send, data);

async function data(i) {
  const target = i.target;
  target.style.display = "none";
  document.querySelector("[data-modal]").appendChild(loading());

  //Request API
  const name_input = document.querySelector("#ml-input").value;
  const data_user = await API(name_input);
  if (!data_user) {
    document.querySelector(".loading").remove();
    target.style.display = "block";
    return;
  }
  addInfo(data_user);
  document.querySelector("[data-avatar]").onload = closeModal;
}
