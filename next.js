// Imports
import { projectsArray } from "./projects.js";

// Get the grid container for projects
const projectsGrid = document.getElementById('projects-grid');

// Set the number of elements to display
let numberElementToDisplay = 0;

// Function to display the initial cards
function displayCards(numberElementToDisplay){

    // Loop through each project and create display them
    for (let i = 0; i < numberElementToDisplay; i++) {
        projectsGrid.innerHTML += projectsArray[i];
    }
}

// On next button click call the function to display the initial cards
document.getElementById('next').addEventListener('click', (e) => {
    e.preventDefault();

    // If projectsArray length lower than number of elements to display
    // do nothing
    if(numberElementToDisplay>=projectsArray.length){
        return
    }
    // if modulo of projectsArray different to 0 put number element to display to 1
    // to avoid to display empty element 
    else if(projectsArray.length%2 !== 0){
        numberElementToDisplay += 1;
        displayCards(numberElementToDisplay);
    }
    // if modulo of projectsArray different to 0 put number element to display to 2
    else{
        numberElementToDisplay += 2;
        displayCards(numberElementToDisplay);
    }
});
