
function submitNote() {
const input = document.getElementById('input');
const output = document.getElementById('output');


if(input.value === ""){
    alert('kuch likh le bhai');
    return
}

const li = document.createElement('li');

li.appendChild(document.createTextNode(input.value));

// const deleteButton = document.createElement('button');
// deleteButton.appendChild(document.createTextNode('delete'));

// deleteButton.addEventListener('click',function(){
//     output.removeChild(li);
// })

// li.appendChild(deleteButton)
// output.appendChild(li);
// input.value = '';

}





