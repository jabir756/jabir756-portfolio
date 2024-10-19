//Project images sources
projectImgSrc = [
    ['project-img/interface.png', 'project 3']
];

// Project Link
projectLens = [
    'https://github.com/jabir756/home-interface-android.git'
]

// Project Descriptions 1: Project Name, Description
projectDetails = [
    ['home interface android', 'Create home interface for college la cite using kotlin and xml']
];

// Get the grid container for projects
const projectGrid = document.getElementById('project-grid');

// Create elements and append them to the body
const div = document.createElement('div');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const a = document.createElement('a');

// Set the number of elements to display
numberElementToDisplay = 0;
document.getElementById('see-more').addEventListener('click', (e) => {
    e.preventDefault();
    numberElementToDisplay += 2;
    // Loop through each project and create a new div for each
    for (let i = 0; i < numberElementToDisplay; i++) {
        div.classList.add('project-card');

        img.src = projectImgSrc[i][0];
        img.alt = projectImgSrc[i][1];

        h3.textContent = projectDetails[i][0];
        p.textContent = projectDetails[i][1];

        a.href = projectLens[i];
        a.textContent = 'View Project';

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(a);

        projectGrid.append(div);
    }
});
