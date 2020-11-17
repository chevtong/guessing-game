function guessNumber(){

    document.getElementById("choose").addEventListener("click", function(){

    
    let givenNumber = document.querySelector("#inputNumber").value;

    let randomNumber = Math.floor(Math.random() * 22) + 1; 

    console.log(givenNumber);

        if (randomNumber == givenNumber){

            alert("Awesome! You number " + givenNumber + " was correct.");

        } else if (givenNumber - randomNumber == 1 || givenNumber - randomNumber == -1){

            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        
        } else {

            alert(`Bummer... You guessed ${givenNumber} and the secret number was ${randomNumber}.`);

        };

         
        console.log(givenNumber,randomNumber);

    });
   

};


guessNumber();
