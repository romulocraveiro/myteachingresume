const body = document.querySelector('body');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const squares = document.querySelectorAll('.square');
const themeButton = document.querySelector('.light');
const linkedIn = document.querySelector('.fa-linkedin');
const gitHub = document.querySelector('.fa-github-square');
const certifications= document.querySelector('.certifications');

function handleChangeBackgroundColor(e){
    left.style.setProperty('--primary-left-color', `${e.target.id}`); 

    if (e.target.id === 'dark-navy'){
       left.style.backgroundColor = '#0a0a3b';
       left.style.color = '#cac3c3';
       right.style.backgroundColor = '#cac3c3';
       body.style.backgroundColor = '#fff';
       linkedIn.style.color = '#cac3c3';
       gitHub.style.color = '#cac3c3';
      
    }
    else if(e.target.id === 'dark-red'){
        left.style.backgroundColor = '';
        left.style.color = '#cac3c3';
        right.style.backgroundColor = '#bdadad';
        right.style.color = '#000';
        linkedIn.style.color = '#cac3c3';
        gitHub.style.color = '#cac3c3';
        body.style.backgroundColor = '#000';
        

    } else if(e.target.id === 'light'){
        themeButton.textContent = themeButton.textContent === '🌞'? '🌛' :'🌞';
        if(themeButton.textContent === '🌞'){
            left.style.backgroundColor = '#000';
            left.style.color = '#cac3c3';
            right.style.backgroundColor = '#000';
            right.style.color = '#cac3c3';
            body.style.backgroundColor = '#000';
        } 
        else{
            left.style.backgroundColor = '#fff';
            left.style.color = '#000';
            right.style.backgroundColor = '#fff';
            right.style.color = '#000';
            linkedIn.style.color = '#000';
            gitHub.style.color = '#000';
            body.style.backgroundColor = '#fff';
           
        }
    } 

}
for (const square of squares) {
    square.addEventListener('click', handleChangeBackgroundColor )
}

// function handleOnMouseOver(){
//     if(left.style.backgroundColor === 'dark-red'){
//         a.style.color = "#00ffff";
//     }else{
//         a.style.color = "inherit";
//     }
// }

// for(const certification of  certifications) {
//     certification.addEventListener('onmouseover', handleOnMouseOver())
// }