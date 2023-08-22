const input = document.getElementById('dropdown');
const output = document.getElementById('output');


input.addEventListener('change' ,function(){
    output.textContent = input.value;
}
)