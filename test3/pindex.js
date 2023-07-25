
function submitNote(){
 
const value = document.getElementById('input').value;
const output = document.getElementById('output');



if(!value){
    alert('write something');
} else {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(value));
    output.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteButton)
   


    deleteButton.addEventListener('click', function(){
        output.removeChild(li)
    })
   
    


}

document.getElementById('input').value = ''


}