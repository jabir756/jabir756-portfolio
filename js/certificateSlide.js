//lens array for certificates files sources

certifSrc =[
    'certificate/css-udemy.jpg',
    'certificate/html-udemy.jpg',
    'certificate/github-udemy.jpg',
    'certificate/javascript-udemy.jpg',
]

//default index for certificates files

let certifIndex = 0;

//slide to next certificate file source

document.getElementById('spanNext').addEventListener('click', (e)=>{
    e.preventDefault();
    if(certifIndex < certifSrc.length-1){
        certifIndex++;
    }
    else{
        certifIndex = 0;
    }
    const certifImg = document.getElementById('certifImg');
    const certifPage = document.getElementById('certifPage');
    
    certifImg.src = `${certifSrc[certifIndex]}`;
    certifPage.innerText = `${certifIndex+1} / ${certifSrc.length}`; //update page number
})

//slide to previous certificate file source

document.getElementById('spanPrev').addEventListener('click', (e)=>{
    e.preventDefault();
    if(certifIndex > 0){
        certifIndex--;
    }
    else{
        certifIndex = certifSrc.length-1;
    }
    const certifImg = document.getElementById('certifImg');
    const certifPage = document.getElementById('certifPage');
    
    certifImg.src = `${certifSrc[certifIndex]}`;
    certifPage.innerText = `${certifIndex+1} / ${certifSrc.length}`; //update page number
})