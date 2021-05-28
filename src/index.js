const init = () => {
  const inputForm = document.querySelector("section > form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
         console.log(event);
    const userInput = document.querySelector("#searchByID");
    console.log(userInput.value);
    
        fetch(`http://localhost:3000/movies/${userInput.value}`)
        .then((response)=>{return response.json()})
        .then(   (data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
        }   );

    });
//use userInput when creating fetch request
//use fetch request to get the title associated with the id assign to title variable
//use fetch request to get summary associated with the id assign to summary variable
//append those two to the h4 element for title and the p element for summary






}

























document.addEventListener('DOMContentLoaded', init);

