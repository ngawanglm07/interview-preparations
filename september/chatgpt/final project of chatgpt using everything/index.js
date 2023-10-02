function submit() {
    const inputEmail = document.getElementById('formInput');
    const inputText = document.getElementById('textInput');
    const output = document.getElementById('output');
    const dropdown = document.getElementById('dropdown');
    console.log('Button clicked');

    let inputVal = inputEmail.value;
    let inputVal1 = inputText.value;

    const p = document.createElement('p');
    const head = document.createElement('h5');
    const d = document.createElement('h4');

    dropdown.addEventListener('change', function(){
        d.textContent = dropdown.value;
    });

    p.appendChild(document.createTextNode(inputVal));
    head.appendChild(document.createTextNode(inputVal1));
    
    output.appendChild(p);
    output.appendChild(head);
    output.appendChild(d);

    inputEmail.value = '';
    inputText.value = '';
    dropdown.selectedIndex = 0;
}



