document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let ship-logo = document.getElementById("ship-logo");
  let left = e.offsetX;
  let top = e.offsetY;
  ship-logo.style.left = left + "px";
  ship-logo.style.top = top + "px";
});
