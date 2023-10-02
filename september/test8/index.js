const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dfeb94f93mshb236fca09fa2e4ap1ec5b0jsnaedb9096adb9',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};
fetch(url , options)
.then((response)=> response.json())
.then(data => {
	console.log(data);
  let randomNumber = Math.floor(Math.random() * 111)
  const language =data.data.languages[randomNumber].name;

  if(language.charAt(0) !== 'A'){
	document.getElementById('output').innerHTML = `<p>${language}</p>`
  } else {
	document.getElementById('output').innerHTML = `<p>nothing</p>`
  }

	
})
.catch((error) => {
	console.log(error);
	alert('this is an error');
})
