const addNoTranslateClassToIcons = () => {
  const items = document.querySelectorAll(".material-icons:not(.notranslate)");
  items.forEach((item) => item.classList.add("notranslate"));
};

document.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector("body");

  const observer = new MutationObserver(addNoTranslateClassToIcons);
  const config = { attributes: false, childList: true, subtree: true };
  observer.observe(body, config);

  addNoTranslateClassToIcons();
});
// setInterval(addNoTranslateClassToIcons, 1000);

