$(document).ready(function() {
  //$("#log").append("<br>added some text");
  $("#myButton").on("click", function() {

$("#myButton").on("mouseenter", function() {
$("#log").append("<br> input focus");
$(this).text("ORDER NOW!!");
})
.on("mouseleave", function () {
  $("#log").append("<br> Button mouse leave");
$(this).text("Click me!!!");
});
    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextarea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name ='gender']:checked").val();



    $("#log").append("<br>User clicked the button");
    $("#log").append("<br>Value of input is: " + myInput);
    $("#log").append("<br>Value of textarea is: " + myTextarea);
    $("#log").append("<br>Value of select is: " + mySelect);
    $("#log").append("<br>Value of select is: " + myRadio);
  })
  //focus event
    //chnages background to grey
    $("input[type='text']").on("focus", function() {
  $("#log").append("<br> displays background color");
      $(this).css("background-color", "#00ff04");

    })
//blur event
    //chnages background to whilte
       $("input[type='text']").on("blur", function() {
$("#log").append("<br> makes background white");
         $(this).css("background-color", "white");


       })

      $("#mySelect").on("change", function() {
var val = $(this).val();
      $("#mySelectMessage").html(val + "is a nice selection!");

      });

});
