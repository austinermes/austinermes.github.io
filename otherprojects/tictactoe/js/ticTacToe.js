$(document).ready(function() {

  var circleOrEx = "o"; // whom ever is O is first
  var isGameInProgress = true; // the game is active
  var winningCombos = { // the game consist of 9 squares numbered 0-8 from left to right on each row in a verticlal sequencial order
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // this event starts the game
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// boardSquares is now every div element within #board
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //X or O goes in any square

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // after new game button is clicked then the game restarts
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //boardSquares is now every div inside #board id
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //Reduce the set of matched elements to those that match the selector or pass the function's test.
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //old game put on the side after its played
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //deletes anything in the empty class to games that are in progress
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //looks to see if a player had won, chosensquare refers to the winning square.
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //the loop gives the length of the multiArr.
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) {
          playerWon = false;
        }
      }

      if (playerWon) { // the last coupple of lines affect the grid when a player gets the right combo

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Explain this condition
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");//changes green when the players combo wins
        alert("Winner is " + circleOrEx.toUpperCase() + "!"); //winner is x or winner is o

        isGameInProgress = false; // game is done
        return false; //this exits the loop
      }
    }


  }
})
