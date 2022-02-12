const selectPlayer_X = [];
const selectedPlayer_O = [];

// if (selectPlayer_X.length === 1 && selectedPlayer_O.length === 2) {

//     return;
// }

// if (selectPlayer_X.length === 1 && selectedPlayer_O.length === 2) {

//   selectedPlayer_O.pop("o");

// }


console.log(document.querySelector(".default-msg").style.display === "")


function playerXchoice(){

document.querySelector(".cells-container").addEventListener("click", event =>{




});


}



function playerOchoice(){

    document.querySelector(".cells-container").addEventListener("click", event =>{

    

      if (Array.from(event.target.classList).includes("one")){


        document.getElementById("player-icons-1").src = "./SVG/large-o.svg";



      }


      if (Array.from(event.target.classList).includes("two")){

        document.getElementById("player-icons-2").src = "./SVG/large-o.svg";

      }


      if (Array.from(event.target.classList).includes("three")){

        document.getElementById("player-icons-3").src = "./SVG/large-o.svg";

      }

      if (Array.from(event.target.classList).includes("four")){

        document.getElementById("player-icons-4").src = "./SVG/large-o.svg";

      }

      if (Array.from(event.target.classList).includes("five")){

        document.getElementById("player-icons-5").src = "./SVG/large-o.svg";

      }

      if (Array.from(event.target.classList).includes("six")){

        document.getElementById("player-icons-6").src = "./SVG/large-o.svg";

      }


      if (Array.from(event.target.classList).includes("seven")){

        document.getElementById("player-icons-7").src = "./SVG/large-o.svg";

      }


      if (Array.from(event.target.classList).includes("eight")){

        document.getElementById("player-icons-8").src = "./SVG/large-o.svg";

      }


      if (Array.from(event.target.classList).includes("nine")){

        document.getElementById("player-icons-9").src = "./SVG/large-o.svg";

      }
















        
        
        });
        

}


function playerXchoice(){

  document.querySelector(".cells-container").addEventListener("click", event =>{

  

    if (Array.from(event.target.classList).includes("one")){


      document.getElementById("player-icons-1").src = "./SVG/large-x.svg";



    }


    if (Array.from(event.target.classList).includes("two")){

      document.getElementById("player-icons-2").src = "./SVG/large-x.svg";

    }


    if (Array.from(event.target.classList).includes("three")){

      document.getElementById("player-icons-3").src = "./SVG/large-x.svg";

    }

    if (Array.from(event.target.classList).includes("four")){

      document.getElementById("player-icons-4").src = "./SVG/large-x.svg";

    }

    if (Array.from(event.target.classList).includes("five")){

      document.getElementById("player-icons-5").src = "./SVG/large-x.svg";

    }

    if (Array.from(event.target.classList).includes("six")){

      document.getElementById("player-icons-6").src = "./SVG/large-x.svg";

    }


    if (Array.from(event.target.classList).includes("seven")){

      document.getElementById("player-icons-7").src = "./SVG/large-x.svg";

    }


    if (Array.from(event.target.classList).includes("eight")){

      document.getElementById("player-icons-8").src = "./SVG/large-x.svg";

    }


    if (Array.from(event.target.classList).includes("nine")){

      document.getElementById("player-icons-9").src = "./SVG/large-x.svg";

    }
















      
      
      });
      

}

function handlePlayerO() {

  if(document.querySelector(".default-msg").style.visible){



  }
  document.querySelector(".default-msg").classList.add("hidden");
  document.querySelector(".o-turn").classList.remove("hidden");
  document.querySelector(".x-turn").classList.add("hidden");
  document.querySelector(".x-score").classList.remove("bottom-border");


 


}

function handlePlayerX() {

 
  document.querySelector(".o-turn").classList.add("hidden");
  document.querySelector(".x-turn").classList.remove("hidden");



}

function buttonClicked(event) {
  if (
    event.target.classList.contains("x-score") ||
    event.target.classList.contains("o-score")
  ) {
    switch (event.target.className) {
      case "x-score":
        handlePlayerX();
        


        break;

      case "o-score":
        handlePlayerO();
        

        break;
    }
  }
}

function init() {
  document.querySelector(".score-board").addEventListener("click", (event) => {
    buttonClicked(event);
  });
}

init();
