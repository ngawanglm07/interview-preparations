const heading = document.getElementById('heading');
const buttonn = document.getElementById('colour');


buttonn.addEventListener('click', function(){
    heading.classList.toggle('highlight')
})