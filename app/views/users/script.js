window.onload = function(e){
    console.log("window.onload");

    // Header

  // var roundScore = [0,0]
  // var currPlayer = 0
  var counter;
  var currentPlayer;

  //========= ======== ======= Game Object ======= ======== ========
  var game = {
    // playerArray: [],
    allPlayers: [],
    currentPlayer: null,
    // phraseArray: ["A Chip on Your Shoulder", "A Dime a Dozen",
    // "A Fool and His Money Are Soon Parted", "A Piece of Cake", "An Arm and a Leg",
    // "All Greek To Me", "Back to Square One", "Back To the Drawing Board",
    // "Barking Up The Wrong Tree", "Beating Around the Bush", "Beating a Dead Horse",
    // "Between a Rock and a Hard Place", "Break The Ice", "Burst Your Bubble",
    // "Close But No Cigar", "Cry Over Spilt Milk", "Cry Wolf", "Cup Of Joe",
    // "Curiosity Killed The Cat", "Cut To The Chase"],

    initialize: function(){
      console.log("==initialize==");
      $('#btn').on("click", game.startgame);
      $('#spin').on("click", game.spinwheel);
      // $('#vowel').on("click", game.buyvowel);
      // $('#solve').on("click", game.solvepuzzle);
      // $('#newpuzzle').on("click", game.newgame);
      $('#enter').on("click", game.userInput);
    },

    startgame: function() {
      console.log("==startgame==");
      // if (game.allPlayers.length = 0) then else second step
      var start = document.getElementById("demo");
      var playerone = document.getElementById("pone").value;
      var playertwo = document.getElementById("ptwo").value;
      var playerthree = document.getElementById("pthree").value;
      var players = [playerone, playertwo, playerthree];
      // var input = playerone + playertwo + playerthree;
      console.log("playerone:", playerone);
      console.log("playertwo:", playertwo);
      console.log("playerthree:", playerthree);
      if ((playerone.length >= 1) || (playertwo.length >= 1) || (playerthree.length >= 1)) {
        console.log("==Let's play!==");
        alert("Let's play!");

        var nextPlayer;
        for (var i = 0; i < players.length; i++) {
          players[i]
          nextPlayer = {
            name: players[i],
            Cscore: 0,
            totalScore: 0
          }
          game.allPlayers.push(nextPlayer)
        }

      } else {
        console.log("==Please enter player(s) name==");
        alert("Please enter player(s) name");
      }

      clearInterval(counter);
      // console.log(allPlayers);
      var display = $('#display');
      var phraseArray = ["A Chip on Your Shoulder", "A Dime a Dozen",
      "A Fool and His Money Are Soon Parted", "A Piece of Cake", "An Arm and a Leg",
      "All Greek To Me", "Back to Square One", "Back To the Drawing Board",
      "Barking Up The Wrong Tree", "Beating Around the Bush", "Beating a Dead Horse",
      "Between a Rock and a Hard Place", "Break The Ice", "Burst Your Bubble",
      "Close But No Cigar", "Cry Over Spilt Milk", "Cry Wolf", "Cup Of Joe",
      "Curiosity Killed The Cat", "Cut To The Chase"];

      var randomIndex = Math.round((Math.random() * phraseArray.length)) ;
      console.log("phraseArray:", phraseArray);
      var selectedDisplay = phraseArray[randomIndex];
      var displayString = "";
      for (var i = 0; i < selectedDisplay.length; i++) {
        displayString += "<div class='letterbox'> <p class='letters'>" + selectedDisplay[i] + "</p></div>";
      }

      $('#display').html(displayString);
      // $( ".letterbox" ).hide();
    },

    userInput: function() {
      console.log("==userInput==");
      // $('#solveinput').show('#solveInput');
      // $('#solve').show('#solve');
      // console.log("==== guess ====");
      // var guessLetter = $('#guessInput').val().toUpperCase()
      // console.log('guessLetter:', guessletter);

      for (var i = 0; i < game.selectedDisplay.length; i++) {
        if (guessLetter == game.selectedDisplay[i]) {
          console.log('---- match ----');

        }
      }
      var input = $("#userInput");
      var letters = $(".letters");
      if (input == letters) {
        letters.style.visibility = "visible" ;
      } else
        alert("Next Player")
    },

    spinwheel: function() {
      console.log("==spinwheel==");
      clearInterval(counter);
      var playerone = document.getElementById("pone").value;
      var playertwo = document.getElementById("ptwo").value;
      var playerthree = document.getElementById("pthree").value;
      var players = [playerone, playertwo, playerthree];
      var nextPlayer;
      for (var i = 0; i < players.length; i++) {
        players[i]
        nextPlayer = {
          name: players[i],
          Cscore: 0,
          totalScore: 0
        }
      }
        game.allPlayers.push(nextPlayer)
      var $wheel = $("#wheel");
      var wheelValues = [4500, 4000, 9500, 3500, 5000, 6500, 7000, 8000, 9000,
        6000,  3000,  5500, 7500,  4000];
      var randomIndex = Math.round((Math.random() * wheelValues.length)) ;
      console.log("randomIndex:", randomIndex);
      var selectedValue = wheelValues[randomIndex];
      console.log("==currentPlayer==");


      // $('#money' + currentPlayer).text(selectedValue)
      // nextPlayer[currentPlayer].score = selectedValue + nextPlayer[currentPlayer].score;
      // $('#money' + currentPlayer).text(nextPlayer[currentPlayer].score);
      var playerArray = Object.keys(nextPlayer);

    if (playerArray.length >= currentPlayer) {

      if (playerArray.length == 1) {
        currentPlayer = 0;
        console.log("currentPlayer1:", currentPlayer);
      }else if (playerArray.length <= 2) {
        currentPlayer = 1;
        console.log("currentPlayer2:", currentPlayer);

      } else {
        currentPlayer = 2;
        console.log("currentPlayer3:", currentPlayer);
      }
    }

      $('#wheel').text(selectedValue);
    },

    buyvowel: function() {
      console.log("==buyvowel==");
      clearInterval(counter);

      var vowels = ["A","E","I","O","U"];
      // $('#buyvowel').val('a', 'e', 'i', 'o', 'u');


    },

    solvepuzzle: function() {
      console.log("==solvepuzzle==");
      clearInterval(counter);
      var input = $("#userInput").value;
      var letters = $(".letters").value;
      if (input == letters) {
        letters.style.visibility = "visible" ;
      }else
      alert("Next Player")
    },

    newgame: function() {
      console.log("==newgame==");
      clearInterval(counter);


    }


  }
    game.initialize();


  }
