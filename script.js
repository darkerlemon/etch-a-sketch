const container = document.querySelector('.container');
container.style.height = '480px';
container.style.width = '480px';
let heightBox = `${parseInt(container.style.height)/16}px`;
let heightWidth = `${parseInt(container.style.width)/16}px`;
console.log(container.style.height);
console.log(heightBox);  

for (let i = 0; i < 256 ; i++){
let boxes = document.createElement('div');
boxes.classList.add('boxes');
container.appendChild(boxes);
boxes.style.backgroundColor = 'white'; 
boxes.style.height = heightBox;
boxes.style.width = heightWidth;
}



container.addEventListener('mouseover', function(e)
{
    console.log(e);
    console.log(e.target);
    e.target.style.backgroundColor = 'black';

});
