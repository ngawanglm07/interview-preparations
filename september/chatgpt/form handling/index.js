



function submitNote(){


let text = document.getElementById("inputForm");
const result = document.getElementById('result');





if(!text.value){
    alert('this feidl cannot be empty')
    return ;
} else {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(text.value));
   
    text.value= '';
    const deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode('delete'));


    deleteButton.addEventListener('click',function(){
        result.removeChild(li)
    })

    li.appendChild(deleteButton);
    result.appendChild(li)

}





}