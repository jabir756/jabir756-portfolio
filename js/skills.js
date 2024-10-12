//List skills logo sources and titles contents
let skillsSrcTitles = [
    ['logo/html-logo.png', 'Html'],
    ['logo/css-logo.png', 'CSS'],
    ['logo/javascript-logo.webp', 'JavaScript'],
    ['logo/python-logo.png', 'Python'],
    ['logo/typescript-logo.png', 'typescript'],
]

//get skills list element from HTML file
const skillsList = document.getElementById('skills-list');

//add skills as well as skills from skillSrcTitle array to skills list
for(let i = 1; i < skillsSrcTitles.length-1; i++){
    //create skill elements
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.className = 'skill-logo';
    const h4 = document.createElement('h4');
    h4.className = 'skill-title';
    //create skill image
    img.src = `${skillsSrcTitles[i][0]}`;
    img.alt = `${skillsSrcTitles[i][1]}`;
    //create skill title
    h4.textContent = `${skillsSrcTitles[i][1]}`;
    //add skill image and title to div
    div.append(img, h4);
    //add div to skills list
    skillsList.append(div);
}
