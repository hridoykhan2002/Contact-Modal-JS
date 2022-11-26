const btn = document.querySelector('.btn');
const formContainer = document.querySelector('.formcontainer');
const itag = document.querySelector('i');
btn.addEventListener('click',() =>{
    formContainer.classList.toggle('active-form');
})

itag.addEventListener('click',() =>{
    formContainer.classList.remove('active-form');
})