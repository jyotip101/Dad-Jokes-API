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
const errorElement = document.getElementById('error-container');
const errorMesgElement =document.getElementById('error-message');
const loaderElement = document.getElementById('loader');
const buttonTextElement = document.getElementById('cta');

const API = 'https://icanhazdadjoke.com/';  

const xhr = new XMLHttpRequest();

function getJokes () { 
 
    xhr.open('GET', API);
      
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.responseType = 'json'; 

    xhr.onload = function() { 
      showJokes(xhr.response.joke);  
      buttonTextstate(false);
    };
    
    xhr.onerror = () => {  
      showError('An error occurred, please try again');
      buttonTextstate(true);

    }

    xhr.send(); 
}

const showJokes = (jokes) => {
  showLoader(false)
  setButtonState(false);
  jokeElement.innerHTML = jokes;
}

const showError = (error) => {
  showLoader(false);
  setButtonState(false);
  errorElement.style.display = 'block';
  errorMesgElement.innerHTML = error; 

}

const showLoader = (isLoading) => {
  const isVisible = isLoading ? 'block' : 'none';
  loaderElement.style.display = isVisible;
}
 
const buttonTextstate = (isError) =>{
  const buttonText = isError ? 'Try again' : 'Get another one';
  buttonElement.innerHTML = buttonText;
}

const setButtonState = (isDisabled) => {
  if(isDisabled){
    buttonElement.setAttribute('disabled', 'disabled');
  }else{
    buttonElement.removeAttribute('disabled');
  }
}

buttonElement.addEventListener('click', () => {
  setButtonState(true);
  showLoader(true);
  getJokes();
})
 