const input = document.getElementById('pass');
const eyeIcon = document.getElementById('eye');

let showPassword = false;
eyeIcon.addEventListener('click', ()=>{
    showPassword = !showPassword;
    if(showPassword){
        input.setAttribute('type', 'text');
        eyeIcon.textContent = 'visibility_off';
    }else{
        input.setAttribute('type', 'password')
        eyeIcon.textContent = 'visibility';
    }
})