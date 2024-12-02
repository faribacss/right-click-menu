const contextMenu = document.querySelector(".container");
const subMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.clientX + window.scrollX;
  let y = e.clientY + window.scrollY;

  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let cmWidth = contextMenu.offsetWidth;
  let cmHeight = contextMenu.offsetHeight;

  // تنظیم مختصات برای قرارگیری درون صفحه
  x = Math.min(x, winWidth - cmWidth + window.scrollX);
  y = Math.min(y, winHeight - cmHeight + window.scrollY);

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  //   let x = e.offsetX;
  //   let y = e.offsetY;
  //   let winWidth = window.innerWidth;
  //   let winHeight = window.innerHeight;
  //   let cmWidth = contextMenu.offsetWidth;
  //   let cmHeight = contextMenu.offsetHeight;

  //   x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  //   y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  if (x > winWidth - cmWidth - subMenu.offsetWidth) {
    subMenu.style.left = "-170px";
  } else {
    subMenu.style.left = "260px";
  }

  contextMenu.style.visibility = "visible";
});
document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
