
let pictures = [];
const numOfImg = 10;
for(let i = 0; i < numOfImg; i++){
    pictures.push(`image/picture${i}.jpg`);
};
console.log(pictures);
let currentImgIndex = 0;
const firstImgIndex = 0;
const lastImgIndex = pictures.length -1;

const image = document.querySelector('.img');

const currentNumber = document.querySelector('.current');
document.querySelector('.prev')
.addEventListener('click', ()=> {
currentImgIndex--;
if(currentImgIndex < 0){
    currentImgIndex = lastImgIndex;
}
image.src = pictures[currentImgIndex];
currentNumber.textContent = `${currentImgIndex + 1}/10`;
});
document.querySelector('.next')
.addEventListener('click', ()=> {
currentImgIndex++;
if(currentImgIndex >= 10){
    currentImgIndex = firstImgIndex;
}
image.src = pictures[currentImgIndex];
currentNumber.textContent = `${currentImgIndex + 1}/10`;
});