$(document).ready(function() {
  $("#js-b").click(function() {
    $(".definition").removeClass("visible");
    $(".definition").addClass("hidden");
    $("#javascript").removeClass("hidden");
    $("#javascript").addClass("visible");
  });
  $("#functions-b").click(function() {
    $(".definition").removeClass("visible");
    $(".definition").addClass("hidden");
    $("#functions").removeClass("hidden");
    $("#functions").addClass("visible");
  });
  $("#strings-b").click(function() {
    $(".definition").removeClass("visible");
    $(".definition").addClass("hidden");
    $("#strings").removeClass("hidden");
    $("#strings").addClass("visible");
  });
  $("#variables-b").click(function() {
    $(".definition").removeClass("visible");
    $(".definition").addClass("hidden");
    $("#variables").removeClass("hidden");
    $("#variables").addClass("visible");
  });
  $("#arguments-b").click(function() {
    $(".definition").removeClass("visible");
    $(".definition").addClass("hidden");
    $("#arguments").removeClass("hidden");
    $("#arguments").addClass("visible");
  });


});
