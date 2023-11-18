document.addEventListener('scroll',(e)=>{
    if(window.scrollY ===0 && document.querySelector('header').classList.contains('dark-header')){
        document.querySelector('header').classList.remove('dark-header');
    }
    else if( !document.querySelector('header').classList.contains('dark-header') ){
        document.querySelector('header').classList.add('dark-header');
    }
})

document.addEventListener('load',()=>{
    if (window.scrollY !==0) document.querySelector('header').classList.add('dark-header');
})

document.querySelectorAll('.contact-form-field').forEach(field => {
    field.addEventListener('keyup',ele=>{
        ele.target.setAttribute('value',ele.target.value);
    });
});

function displaySection(e){
    if(!e.target.classList.contains('active')){
        document.querySelector('.radio-btn.active') && document.querySelector('.radio-btn.active').classList.remove('active');
        document.querySelector('.d-block') && document.querySelector('.d-block').classList.remove('d-block');
        e.target.classList.add('active');
        document.getElementById(e.target.getAttribute('data-target')).classList.add('d-block');
    }
}

// document.querySelector('input[type="date"]').addEventListener('change',ele=>{
//     let selectedDate = document.querySelector('input[type="date"]').value; 
//     ele.target.setAttribute('value',selectedDate);
// });


function toggleMenu(e){
    if(e.target.closest('.nav-container')) return;
    if(document.querySelector('.header-bottom').classList.contains('open')){
        document.querySelector('.nav-container').classList.toggle('slide');
        setTimeout(()=>{
            document.querySelector('.header-bottom.open').classList.remove('open');
        },800)
    }
    else{
        document.querySelector('.header-bottom').classList.add('open');
        setTimeout(()=>{
            document.querySelector('.nav-container').classList.toggle('slide');
        },350)
    }
    document.querySelector('.header-svg-container.mobile').classList.toggle('open');
}


function toggleSearchBar(e){
    if(e.target.closest('.search-bar')) return;
    if(document.querySelector('.search-bar-container-mobile').classList.contains('open')){
        document.querySelector('.search-bar-container-mobile').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.search-bar-container-mobile').classList.remove('open');
        }, 100);
    }
    else{
        document.querySelector('.search-bar-container-mobile').classList.add('open');
        setTimeout(() => {
            document.querySelector('.search-bar-container-mobile').style.opacity = 1;
        }, 100);
    }
}

function toggleDescription(element){
    element.parentElement.classList.toggle('reveal');
    element.parentElement.querySelector('.training-description').classList.toggle('d');
    element.parentElement.querySelector('.training-infos').classList.toggle('d');
}

function toggleFullScreen(){
    document.querySelector('.qualiopi-certificate').classList.toggle('full-screen');
    document.body.classList.toggle('locked');
    if(!document.body.classList.toggle('locked')) document.querySelector('.qualiopi-certificate').scrollTop = 0 ;
}

function toggleCalendar(e){
    if(e.target.closest('.dates-container')) return;
    document.querySelector('.dates').classList.toggle('full-screen');
    document.body.classList.toggle('locked');
    if(!document.body.classList.toggle('locked')) document.querySelector('.dates').scrollTop = 0 ;
}