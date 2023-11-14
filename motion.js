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
        e.target.classList.add('active')
        document.getElementById(e.target.getAttribute('data-target')).classList.add('d-block');
    }
}

// document.querySelector('input[type="date"]').addEventListener('change',ele=>{
//     let selectedDate = document.querySelector('input[type="date"]').value; 
//     ele.target.setAttribute('value',selectedDate);
// });

