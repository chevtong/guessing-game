

// function example() {
//     let btn = document.querySelector("#choose");
//     let randomNumber = Math.ceil(Math.random() * 100);
//     btn.onclick = function() {
//        let givenNumber = document.querySelector("#inputNumber").value;
//        let valueInt = parseInt(givenNumber, 100);
//        console.log(randomNumber, givenNumber);
//     };
//  }
//  example();

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }





function guessNumber(){

   
    

    document.getElementById("choose").addEventListener("click", function(){



    let givenNumber = document.querySelector("#inputNumber").value;

    let randomNumber = Math.floor(Math.random() * 22) + 1; 

    

        if (randomNumber == givenNumber){

            alert("Awesome! You number " + givenNumber + " was correct.");

        } else {

            alert(`Bummer... You guessed ${givenNumber} and the secret number was ${randomNumber}.`);

        };

        console.log(randomNumber, givenNumber);


    });
   

};


guessNumber();
