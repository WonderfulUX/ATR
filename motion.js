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
        },350)
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