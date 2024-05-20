const userInput = document.getElementById('userInput');
const btnCheck = document.getElementById('btnCheck');

let ComputerRandomNumber = GetRandomNumber();
btnCheck.addEventListener('click',function(){
    let userNumber = userInput.value;
    if(isNaN(userNumber) || userNumber == ""){
        document.querySelector('.hint').textContent = 'Invalid number provided!';
        return;
    }
    if(userNumber > ComputerRandomNumber){
        document.querySelector('.hint').textContent = 'Your Guess is higher!';
    }
    if(userNumber < ComputerRandomNumber){
        document.querySelector('.hint').textContent = 'Your Guess is Low!';
    }
    if(userNumber == ComputerRandomNumber){
        document.querySelector('.play-again-panel')
            .classList.remove('hide');
        document.querySelector('.game-panel')
            .classList.add('hide');
        document.querySelector('.result').textContent = `Your Guess is Right ! It was ${ComputerRandomNumber}`;
    } else {
        document.querySelector('.hint').textContent = 'Insert Number From 1 To 10';
    }
});

function GetRandomNumber(){
    return Math.ceil(Math.random() * 10);
}

document.getElementById('btnPlayAgain').addEventListener('click', function(){
    window.location.reload();
});
