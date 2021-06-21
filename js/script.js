lightGallery(document.getElementById("lightgallery"), {
  speed: 500,
  autoplayFirstVideo: false,
  backgroundColor: "#dead24"
});

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  wrapAround: true,
  autoPlay: 3000,
  fade: true,
  prevNextButtons: false,
  pageDots: false,
  setGallerySize: false
});
