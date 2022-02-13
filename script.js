const playerXselection = [];
const playerOselection = [];


function xWinner(){


  
  document.querySelector(".cells-container").classList.add("hidden");
  document.querySelector(".x-win").classList.remove("hidden");
  



}



function oWinner(){

  
  document.querySelector(".cells-container").classList.add("hidden");
  document.querySelector(".o-win").classList.remove("hidden");
  


}



function playerXchoice() {

  document.querySelector(".cells-container").addEventListener("click", event => {



    if (Array.from(event.target.classList).includes("one")) {


      document.getElementById("player-icons-1").src = "./SVG/large-x.svg";
      checkXwinner();
    }


    if (Array.from(event.target.classList).includes("two")) {

      document.getElementById("player-icons-2").src = "./SVG/large-x.svg";
      checkXwinner();
    }


    if (Array.from(event.target.classList).includes("three")) {

      document.getElementById("player-icons-3").src = "./SVG/large-x.svg";
      checkXwinner();
    }

    if (Array.from(event.target.classList).includes("four")) {

      document.getElementById("player-icons-4").src = "./SVG/large-x.svg";
      checkXwinner();
    }

    if (Array.from(event.target.classList).includes("five")) {

      document.getElementById("player-icons-5").src = "./SVG/large-x.svg";
      checkXwinner();
    }

    if (Array.from(event.target.classList).includes("six")) {

      document.getElementById("player-icons-6").src = "./SVG/large-x.svg";
      checkXwinner();
    }


    if (Array.from(event.target.classList).includes("seven")) {

      document.getElementById("player-icons-7").src = "./SVG/large-x.svg";
      checkXwinner();
    }


    if (Array.from(event.target.classList).includes("eight")) {

      document.getElementById("player-icons-8").src = "./SVG/large-x.svg";
      checkXwinner();
    }


    if (Array.from(event.target.classList).includes("nine")) {

      document.getElementById("player-icons-9").src = "./SVG/large-x.svg";
      checkXwinner();

    }






  });


}


function handlePlayerX() {

  if (window.getComputedStyle(document.querySelector(".default-msg"), null).getPropertyValue("display") === "block") {

    document.querySelector(".default-msg").classList.add("hidden");
    document.querySelector(".o-turn").classList.add("hidden");
    document.querySelector(".x-turn").classList.remove("hidden");


  }


  document.querySelector(".x-turn").classList.remove("hidden");
  document.querySelector(".o-turn").classList.add("hidden");

}

function checkOwinner() {
  if (playerOselection.length === 3 || playerOselection.length === 4 || playerOselection.length === 5) {


    if (
      document.getElementById("player-icons-1").src.includes("large-o") &&
      document.getElementById("player-icons-2").src.includes("large-o") &&
      document.getElementById("player-icons-3").src.includes("large-o")) {

      oWinner();

    }

    if (
      document.getElementById("player-icons-4").src.includes("large-o") &&
      document.getElementById("player-icons-5").src.includes("large-o") &&
      document.getElementById("player-icons-6").src.includes("large-o")) {

        oWinner();

    }

    if (
      document.getElementById("player-icons-7").src.includes("large-o") &&
      document.getElementById("player-icons-8").src.includes("large-o") &&
      document.getElementById("player-icons-9").src.includes("large-o")) {

        oWinner();
    }


    if (

      document.getElementById("player-icons-1").src.includes("large-o") &&
      document.getElementById("player-icons-5").src.includes("large-o") &&
      document.getElementById("player-icons-9").src.includes("large-o")) {

        oWinner();

    }

    if (
      document.getElementById("player-icons-3").src.includes("large-o") &&
      document.getElementById("player-icons-5").src.includes("large-o") &&
      document.getElementById("player-icons-7").src.includes("large-o")) {


        oWinner();

    }


    if (
      document.getElementById("player-icons-1").src.includes("large-o") &&
      document.getElementById("player-icons-4").src.includes("large-o") &&
      document.getElementById("player-icons-7").src.includes("large-o")) {


        oWinner();

    }


    if (
      document.getElementById("player-icons-2").src.includes("large-o") &&
      document.getElementById("player-icons-5").src.includes("large-o") &&
      document.getElementById("player-icons-8").src.includes("large-o")) {


        oWinner();

    }


    if (
      document.getElementById("player-icons-3").src.includes("large-o") &&
      document.getElementById("player-icons-6").src.includes("large-o") &&
      document.getElementById("player-icons-9").src.includes("large-o")) {


        oWinner();

    }



  }

}

function checkXwinner() {
  if (playerXselection.length === 3 || playerXselection.length === 4 || playerXselection.length === 5) {


    if (
      document.getElementById("player-icons-1").src.includes("large-x") &&
      document.getElementById("player-icons-2").src.includes("large-x") &&
      document.getElementById("player-icons-3").src.includes("large-x")) {

     xWinner();

    }

    if (
      document.getElementById("player-icons-4").src.includes("large-x") &&
      document.getElementById("player-icons-5").src.includes("large-x") &&
      document.getElementById("player-icons-6").src.includes("large-x")) {

       xWinner();

    }

    if (
      document.getElementById("player-icons-7").src.includes("large-x") &&
      document.getElementById("player-icons-8").src.includes("large-x") &&
      document.getElementById("player-icons-9").src.includes("large-x")) {

       xWinner();
    }


    if (

      document.getElementById("player-icons-1").src.includes("large-x") &&
      document.getElementById("player-icons-5").src.includes("large-x") &&
      document.getElementById("player-icons-9").src.includes("large-x")) {

       xWinner();

    }

    if (
      document.getElementById("player-icons-3").src.includes("large-x") &&
      document.getElementById("player-icons-5").src.includes("large-x") &&
      document.getElementById("player-icons-7").src.includes("large-x")) {


       xWinner();

    }


    if (
      document.getElementById("player-icons-1").src.includes("large-x") &&
      document.getElementById("player-icons-4").src.includes("large-x") &&
      document.getElementById("player-icons-7").src.includes("large-x")) {


     xWinner();

    }


    if (
      document.getElementById("player-icons-2").src.includes("large-x") &&
      document.getElementById("player-icons-5").src.includes("large-x") &&
      document.getElementById("player-icons-8").src.includes("large-x")) {


       xWinner();

    }


    if (
      document.getElementById("player-icons-3").src.includes("large-x") &&
      document.getElementById("player-icons-6").src.includes("large-x") &&
      document.getElementById("player-icons-9").src.includes("large-x")) {


       xWinner();

    }



  }

}

//player o choosing cell

function playerOchoice() {

  document.querySelector(".cells-container").addEventListener("click", event => {


    if (Array.from(event.target.classList).includes("one")) {


      document.getElementById("player-icons-1").src = "./SVG/large-o.svg";
      checkOwinner();

    }


    if (Array.from(event.target.classList).includes("two")) {

      document.getElementById("player-icons-2").src = "./SVG/large-o.svg";
      checkOwinner();

    }


    if (Array.from(event.target.classList).includes("three")) {

      document.getElementById("player-icons-3").src = "./SVG/large-o.svg";
      checkOwinner();
    }

    if (Array.from(event.target.classList).includes("four")) {

      document.getElementById("player-icons-4").src = "./SVG/large-o.svg";
      checkOwinner();
    }

    if (Array.from(event.target.classList).includes("five")) {

      document.getElementById("player-icons-5").src = "./SVG/large-o.svg";
      checkOwinner();
    }

    if (Array.from(event.target.classList).includes("six")) {

      document.getElementById("player-icons-6").src = "./SVG/large-o.svg";
      checkOwinner();
    }


    if (Array.from(event.target.classList).includes("seven")) {

      document.getElementById("player-icons-7").src = "./SVG/large-o.svg";
      checkOwinner();
    }


    if (Array.from(event.target.classList).includes("eight")) {

      document.getElementById("player-icons-8").src = "./SVG/large-o.svg";
      checkOwinner();
    }


    if (Array.from(event.target.classList).includes("nine")) {

      document.getElementById("player-icons-9").src = "./SVG/large-o.svg";
      checkOwinner();
    }





  });


}


//handling player O
function handlePlayerO() {

  if (window.getComputedStyle(document.querySelector(".default-msg")).getPropertyValue("display") === "block") {

    document.querySelector(".default-msg").classList.add("hidden");
    document.querySelector(".o-turn").classList.remove("hidden");

  } else {

    document.querySelector(".x-turn").classList.add("hidden");
    document.querySelector(".o-turn").classList.remove("hidden");
  }

}


//The program begins from here
function init() {
  document.querySelector(".score-board").addEventListener("click", (event) => {


    if (event.target.tagName === "DIV") {

      if (event.target.className === "x-score") {

        handlePlayerX();
        playerXselection.push("X");

        if (window.getComputedStyle(document.querySelector(".x-turn")).getPropertyValue("display") === "block") {

          playerXchoice();
          console.log(playerXselection);

        }

      }

      if (event.target.className === "o-score") {

        handlePlayerO();
        playerOselection.push("O");

        if (window.getComputedStyle(document.querySelector(".o-turn")).getPropertyValue("display") === "block") {

          playerOchoice();
          console.log(playerOselection);

        }

      }


    }

  });

  

document.querySelector(".btn-restart").addEventListener('click', event =>{


window.location.reload();
 
 
 })
 


}


init();

