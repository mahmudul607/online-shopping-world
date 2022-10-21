//login Button event handler section
const loginBtn=document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('nav-bellow');
    transactionArea.style.display='block';
})


const loginTopBtn=document.getElementById('top-login');
loginTopBtn.addEventListener('click', function(){
    const loginArea=document.getElementById('nav-bellow');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('login-area');
    transactionArea.style.display='block';
})