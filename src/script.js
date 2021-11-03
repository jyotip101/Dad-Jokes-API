/**
* 1. Initialize an XMLHttpRequest constructor
* 2. Open a GET request, set the headers and response type
* 3. Output successful response
* 4. Output error state
* 5. Combine with an event listener (button)
* 6. Adjust UI states accordingly
* 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
*/
const jokeElement = document.getElementById('joke');
const buttonElement = document.getElementById('button');
const API = 'https://icanhazdadjoke.com/';  

const xhr = new XMLHttpRequest();

function getJokes () { 

    xhr.open('GET', API);
      
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.responseType = 'json'; 

    xhr.onload = function() { 
      showJokes(xhr.response.joke); 

    };
    
    xhr.send(); 
}

const showJokes = (jokes) => {
  jokeElement.innerHTML = jokes;
}

buttonElement.addEventListener('click', getJokes); 
 