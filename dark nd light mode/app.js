
const btn = document.querySelector('.light-dark');
btn.addEventListener('click', ()=>{
    if(!document.body.classList.contains('dark'))
    {
        document.body.classList.add('dark');
        btn.textContent = 'Light'
    } else{
        document.body.classList.remove('dark');
        btn.textContent = 'Dark'
    }
});