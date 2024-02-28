$(document).ready(function () {
  $(".navbar-toggle").click(function () {
    $(this).toggleClass("active");
  });
});

$(document).ready(function () {
  $("#myCarousel").carousel({
    interval: 3000, // Change the interval in milliseconds (default is 5000)
  });
});
