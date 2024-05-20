

const coloPricar = document.getElementById('color');
coloPricar.addEventListener('change', ()=>{
    console.log(coloPricar.value);
    document.body.style.backgroundColor = coloPricar.value;
});