"use strict";
const googleSearch = document.getElementById("googleSearch");
const mainParent_searchBox = document.getElementById("mainParent_searchBox");
const crossSign = document.getElementById("crossSign");
const crossBtn = document.getElementById("crossBtn");
const cross_icon_toolTip = document.getElementById("cross_icon_toolTip");
const voice_icon_parent = document.getElementById("voice_icon_parent");
const voice_icon_toolTip = document.getElementById("voice_icon_toolTip");
const lens_icon_parent = document.getElementById("lens_icon_parent");
const lens_icon_toolTip = document.getElementById("lens_icon_toolTip");
const settingBtn = document.getElementById("settingBtn");
const settingCont = document.getElementById("settingCont");
const hiddenLayer = document.getElementById("hiddenLayer");
const productsCont = document.getElementById("productsCont");
const productBtn = document.getElementById("productBtn");
const productBtn_toolTip = document.getElementById("productBtn_toolTip");
const userAccount_btn = document.getElementById("userAccount_btn");
const userAccount_toolTip = document.getElementById("userAccount_toolTip");
const toggle_theme_btn = document.getElementById("toggle_theme_btn");
const theme_imgCont = document.getElementById("theme_imgCont");
const sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
const feedBackCont = document.getElementById("feedBackCont");
const closeFeedbackBTn = document.getElementById("closeFeedbackBTn");
const searchBtn = document.getElementById("searchBtn");

let crossBtn_isPresent = false;

googleSearch.addEventListener("focus", () => {
  mainParent_searchBox.classList.add("shadow-full");
  mainParent_searchBox.classList.add("shadow-[#dadce0]");
});
googleSearch.addEventListener("blur", () => {
  mainParent_searchBox.classList.remove("shadow-full");
  mainParent_searchBox.classList.remove("shadow-[#dadce0]");
  if (String(googleSearch.value).length == 0) {
    remove_crossSign();
  }
});
googleSearch.addEventListener("keyup", () => {
  if (String(googleSearch.value).length > 0) {
    crossSign.classList.remove("invisible");
    crossBtn.classList.add("cursor-pointer");
    crossBtn_isPresent = true;
    voice_icon_parent.classList.add("border-l-[1px]");
    voice_icon_parent.classList.add("border-[#dadce0]");
  } else if (String(googleSearch.value).length == 0) {
    remove_crossSign();
  }
});
crossBtn.addEventListener("click", () => {
  googleSearch.value = "";
  remove_crossSign();
});

function remove_crossSign() {
  crossSign.classList.add("invisible");
  crossBtn.classList.remove("cursor-pointer");
  crossBtn_isPresent = false;
  cross_icon_toolTip.classList.add("hidden");
  voice_icon_parent.classList.remove("border-l-[1px]");
  voice_icon_parent.classList.remove("border-[#dadce0]");
}

settingBtn.addEventListener("click", () => {
  hiddenLayer.click();
  settingCont.classList.remove("hidden");
  hiddenLayer.classList.remove("hidden");
});
hiddenLayer.addEventListener("click", () => {
  settingCont.classList.add("hidden");
  hiddenLayer.classList.add("hidden");
  productsCont.classList.add("hidden");
  productBtn.classList.remove("bg-[#eee]");
});
productBtn.addEventListener("click", () => {
  productsCont.classList.remove("hidden");
  hiddenLayer.classList.remove("hidden");
  productBtn.classList.add("bg-[#eee]");
});
crossBtn.addEventListener("mouseover", () => {
  if (crossBtn_isPresent) {
    cross_icon_toolTip.classList.remove("hidden");
  }
});
voice_icon_parent.addEventListener("mouseover", () => {
  voice_icon_toolTip.classList.remove("hidden");
});
lens_icon_parent.addEventListener("mouseover", () => {
  lens_icon_toolTip.classList.remove("hidden");
});
productBtn.addEventListener("mouseover", () => {
  productBtn_toolTip.classList.remove("hidden");
});
userAccount_btn.addEventListener("mouseover", () => {
  userAccount_toolTip.classList.remove("hidden");
});
toggle_theme_btn.addEventListener("mouseover", () => {
  theme_imgCont.classList.remove("opacity-0");
});
toggle_theme_btn.addEventListener("mouseleave", () => {
  theme_imgCont.classList.add("opacity-0");
});
sendFeedbackBtn.addEventListener("click", () => {
  feedBackCont.classList.remove("hidden");
});
closeFeedbackBTn.addEventListener("click", () => {
  feedBackCont.classList.add("hidden");
});

crossBtn.addEventListener("mouseleave", () => {
  cross_icon_toolTip.classList.add("hidden");
});
voice_icon_parent.addEventListener("mouseleave", () => {
  voice_icon_toolTip.classList.add("hidden");
});
lens_icon_parent.addEventListener("mouseleave", () => {
  lens_icon_toolTip.classList.add("hidden");
});
productBtn.addEventListener("mouseleave", () => {
  productBtn_toolTip.classList.add("hidden");
});
userAccount_btn.addEventListener("mouseleave", () => {
  userAccount_toolTip.classList.add("hidden");
});

// Search logic
function searchFunc() {
  let val = String(googleSearch.value);
  if (val.length > 0) {
    const main_search_box = document.getElementById("gsc-i-id1");
    const main_search_btn = document.querySelector(".gsc-search-button-v2");
    main_search_box.value = val;
    main_search_btn.click();
    crossBtn.click();
  }
}

googleSearch.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    searchFunc();
  }
});
searchBtn.addEventListener("click", () => {
  searchFunc();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// remove the main form given by google
async function remove_defaultSearch(time) {
  await sleep(time);
  const main_form = document.querySelector(".gsc-search-box-tools");
  main_form.style.position = "fixed";
  main_form.style.top = "-100%";
  document.querySelector(".gsc-control-cse-en").style.padding = "0px";
}
const sleepTime = 0.1 * 1000;
remove_defaultSearch(sleepTime);
