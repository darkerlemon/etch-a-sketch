const page = document.querySelector('.page');
const container = document.querySelector('.container');
container.style.height = '480px';
container.style.width = '480px';
let initHeight = 16;
let initWidth = 16;
let heightBox = `${parseInt(container.style.height)/initHeight}px`;
let heightWidth = `${parseInt(container.style.width)/initWidth}px`; 

for (let i = 0; i < (initHeight * initWidth) ; i++){
let boxes = document.createElement('div');
boxes.classList.add('boxes');
container.appendChild(boxes);
boxes.style.backgroundColor = 'white'; 
boxes.style.height = heightBox;
boxes.style.width = heightWidth;
}

container.addEventListener('mouseover', function(e)
{
    e.target.style.backgroundColor = 'black';
});

const btnReset = document.querySelector('.button');

btnReset.addEventListener('click', function(){
   let input = prompt('number of squares per size?');
   if (input <= 100) {
   let initHeight = input;
   let initWidth = input;
  
   while (container.firstChild) {
    container.firstChild.remove()
};
container.style.backgroundColor = 'white';

for (let i = 0; i < (initHeight * initWidth) ; i++){
    let boxes = document.createElement('div');
    let initHeight = input;
    let initWidth = input;
    boxes.classList.add('boxes');
    container.appendChild(boxes);
    boxes.style.backgroundColor = 'white'; 
    boxes.style.height = `${parseInt(container.style.height)/initHeight}px`;
    boxes.style.width = `${parseInt(container.style.width)/initWidth}px`;
}} else alert('please choose a number less than 100');
});

page.appendChild(btnReset);
