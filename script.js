window.onscroll = function showHeader(){
    let navigator = document.getElementById('nav');
    let title = document.getElementById('title-fixed');

    if(window.scrollY > 155){
        navigator.classList.add('nav_fixed');
        title.classList.add('title_padding-top');
    } else {
    navigator.classList.remove('nav_fixed');
    title.classList.remove('title_padding-top');}
}



const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');


openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');

    document.body.style.paddingRight = '${getScrollBarWidth()}px';
    document.body.style.overflow = 'hidden';
})

closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active')
})


const getScrollBarWidth = () => {
    const item = document.createElement('div');


    item.style.position = 'absolute';
    item.style.top = '-9999px';
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.overflow = 'scroll';
    item.style.visibility = 'hidden';

    document.body.appendChild(item);
    const scrollBarWidth =  item.offsetWidth - item.clientWidth;
    document.body.removeChild(item);

    return scrollBarWidth
}


const phonGridId = document.getElementById('service_grid-id');
phonGridId.addEventListener('click', (e) => {
    e.preventDefault();
    phonGridId.classList.toggle('service_change');
});


let communicationGridId = document.getElementById('communication_grid-id');
communicationGridId.addEventListener('click', (e) => {
    e.preventDefault();
    communicationGridId.classList.toggle('service_change');
});


let effGridId = document.getElementById('eff_grid-id');
effGridId.addEventListener('click', (e) => {
    e.preventDefault();
    effGridId.classList.toggle('service_change');
});


let costGrid = document.getElementById('cost_grid-id');
costGrid.addEventListener('click', (e) => {
    e.preventDefault();
    costGrid.classList.toggle('service_change');
});


let workGridId = document.getElementById('work_grid-id');
workGridId.addEventListener('click', (e) => {
    e.preventDefault();
    workGridId.classList.toggle('service_change');
});

let safeGrid = document.getElementById('safe_grid-id');
safeGrid.addEventListener('click', (e) => {
    e.preventDefault();
    safeGrid.classList.toggle('service_change');
});

let taiGrid = document.getElementById('tai_grid-id');
taiGrid.addEventListener('click', (e) => {
    e.preventDefault();
    taiGrid.classList.toggle('service_change');
});

let driveGrid = document.getElementById('drive_grid-id');
driveGrid.addEventListener('click', (e) => {
    e.preventDefault();
    driveGrid.classList.toggle('service_change');
});
   
let dediGrid = document.getElementById('dedi_grid-id');
dediGrid.addEventListener('click', (e) => {
    e.preventDefault();
    dediGrid.classList.toggle('service_change');
});

let resGrid = document.getElementById('res_grid-id');
resGrid.addEventListener('click', (e) => {
    e.preventDefault();
    resGrid.classList.toggle('service_change');
});

let closeBurger = document.getElementById('close_burger');
let openBurger = document.getElementById('open_burger');
let menuforPhone = document.getElementById('menufor_phone');

openBurger.addEventListener('click', (e) => {
    e.preventDefault();
    menuforPhone.classList.add('menufor_phone-active');
    document.body.style.overflow = 'hidden';
})

closeBurger.addEventListener('click', (e) => {
    e.preventDefault();
    menuforPhone.classList.remove('menufor_phone-active');
    document.body.style.overflow = 'scroll';
})



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();

