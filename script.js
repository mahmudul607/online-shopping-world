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


// for main Catagories section


const laptopSubCatBtn=document.querySelector(".cat-item-1");
laptopSubCatBtn.addEventListener('click', () =>{
    console.log("clicked");
    const subCatLaptop=document.querySelector(".laptop-sub-cat");
    subCatLaptop.style.display='block';
})


const appleDetailsCatBtn=document.querySelector(".sub-item-1");
appleDetailsCatBtn.addEventListener('click', () =>{
    console.log("clicked");
    const subCatLaptop1=document.getElementById("al-store");
    subCatLaptop1.style.display='block';
    const subCatLaptop2=document.getElementById("ll-store");
    subCatLaptop2.style.display='none';
    const subCatLaptop3=document.getElementById("wl-store");
    subCatLaptop3.style.display='none';
})

const lenovoDetailsCatBtn=document.querySelector(".sub-item-2");
lenovoDetailsCatBtn.addEventListener('click', () =>{
    console.log("clicked");
    const subCatLaptop2=document.getElementById("ll-store");
    subCatLaptop2.style.display='block';
    
    const subCatLaptop1=document.getElementById("al-store");
    subCatLaptop1.style.display='none';
    const subCatLaptop3=document.getElementById("wl-store");
    subCatLaptop3.style.display='none';
})

const waltonDetailsCatBtn=document.querySelector(".sub-item-3");
waltonDetailsCatBtn.addEventListener('click', () =>{
    console.log("clicked");
    const subCatLaptop3=document.getElementById("wl-store");
    subCatLaptop3.style.display='block';
    
    const subCatLaptop1=document.getElementById("al-store");
    subCatLaptop1.style.display='none';
    const subCatLaptop2=document.getElementById("ll-store");
    subCatLaptop2.style.display='none';
})


// owl_carousel
$('.custom_carousel').owlCarousel({
    loop:true,
    margin:6,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})