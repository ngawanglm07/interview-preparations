function submit(){
    
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    
 const inputVal = input.value
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inputVal));

    const button = document.createElement('button');
    button.appendChild(document.createTextNode('delete'));
    li.appendChild(button);

    
    output.appendChild(li);

    button.addEventListener('click' , function(){
       output.removeChild(li);
    })

    input.value = '';

}