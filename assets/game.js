// on game start:

// an on click event triggering the start of the game:
// -Random Number in the header section is replaced with a random number. 
// Randomize the value of each crystal displayed in the content HTMLTableSectionElement

// goal of game is to match score from click events to score displayed in header HTMLTableSectionElement
// if the score from the cyrstals equals the random number increment wins else increment loses
// each time a crystal is clicked the value of score increases

$(document).ready(function () {
    var imageOne = Math.floor(Math.random() * 5) + 1;
    $("#image-one").attr("data-crystalvalue", imageOne);
    var imageTwo = Math.floor(Math.random() * 3) + 1;
    $("#image-two").attr("data-crystalvalue", imageTwo);
    var imageThree = Math.floor(Math.random() * 1) + 1;
    $("#image-three").attr("data-crystalvalue", imageThree);
    var imageFour = Math.floor(Math.random() * 8) + 1;
    $("#image-four").attr("data-crystalvalue", imageFour);
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var score = 0;
    var wins = 0;
    var loses = 0;

    $("#random-number").html(randomNumber);

    function jewelGame() {
        

        
//create a function that increments the score whenever clicking on a picture

        $(".crystal").on("click", function () {
            var crystalValue = parseInt($(this).attr("data-crystalvalue"));
            score += crystalValue;
            $("#score").html(score)
            

            if (randomNumber === score) {
                wins++;
                $("#wins").html("Wins: " + wins);
                reset();
                
                
            } else if (randomNumber < score) {
                loses++ 
                $("#loses").html("Loses: " + loses);
                reset(); 
                console.log(loses);
            }
        })

        //create a reset function once there is either a win or a loss in the game
        function reset(){
            imageOne = Math.floor(Math.random() * 5) + 1;
            $("#image-one").attr("data-crystalvalue", imageOne);
            imageTwo = Math.floor(Math.random() * 3) + 1;
            $("#image-two").attr("data-crystalvalue", imageTwo);
            imageThree = Math.floor(Math.random() * 1) + 1;
            $("#image-three").attr("data-crystalvalue", imageThree);
            imageFour = Math.floor(Math.random() * 8) + 1;
            $("#image-four").attr("data-crystalvalue", imageFour);
            randomNumber = Math.floor(Math.random() * 100) + 1;

            score = 0;
            $("#random-number").html(randomNumber);
            $("#score").html(score)

        }

        
    }

    jewelGame();

});





// $(imageOne || imageTwo || imageThree || imageFour).on("click", function () {
//     // pull the data out of the html


//     // We'll then increment the score each time by the randomly selected number.
//     // If the randomnumber is equal to score the increment wins and reset randomnumber and score
//     // If the randomnumber is less than score increment losses and reset randomnumber and score
//     score += (imageOne || imageTwo || imageThree || imageFour);

//     if (randomNumber === score) {
//         win++;
//     } else if (randomNumber < score) {
//         loses++;
//     }

// });

