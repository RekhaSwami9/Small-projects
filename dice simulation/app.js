const dice1 = document.querySelector('.dice-1');
const dice2 = document.querySelector('.dice-2');
const btnTurn = document.querySelector('.btn-turn');

btnTurn.addEventListener('click', () => {
    if (!dice1.classList.contains('animate')) { 
        dice1.classList.add('animate'); 
    }
    if (!dice2.classList.contains('animate')) { 
        dice2.classList.add('animate'); 
    }

    setTimeout(() => {
        let d1 = GetRandomDice();
        let d2 = GetRandomDice();

        dice1.src = `image/dice-${d1}.png`;
        dice2.src = `image/dice-${d2}.png`;

        document.querySelector('.sum').textContent = `${d1 + d2}`;

        if (dice1.classList.contains('animate')) { 
            dice1.classList.remove('animate'); 
        }
        if (dice2.classList.contains('animate')) { 
            dice2.classList.remove('animate'); 
        }
    }, 2000);
});

function GetRandomDice() {
    return Math.ceil(Math.random() * 6);
}
