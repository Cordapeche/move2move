$(document).ready(function () {

  $(document).ready(function () {
    $(".contenloader").slice(0, 4).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".contenloader:hidden").slice(0, 4).slideDown();
      if ($(".contenloader:hidden").length == 0) {
        $("#loadMore").text("").addClass("noContent");
      }
    });

  })

  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });

  $(".zoom").hover(function () {

    $(this).addClass('transition');
  }, function () {

    $(this).removeClass('transition');
  });




});
