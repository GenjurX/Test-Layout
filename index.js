let playBeach = document.getElementById("playBeach");
let playPuppy = document.getElementById("playPuppy");
let playPark = document.getElementById("playPark");
let iframe = document.getElementById("iframe");

playBeach.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/ksBwr1WQ-R4?autoplay=1&mute=1&playsinline=1";
  iframe.allow = "autoplay";
});
playPuppy.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/eN5AdC20tGE?autoplay=1&mute=1&playsinline=1";
  iframe.allow = "autoplay";
});
playPark.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/iWSjBBQbICA?autoplay=1&mute=1&playsinline=1";
  iframe.allow = "autoplay";
});

$("#myModal").on("hidden.bs.modal", function () {
  iframe.src = "";
});