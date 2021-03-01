let count = 0;
let c_count = 0;
let pi = 1;
var Interval;
var button = document.querySelector('button');
var show_pi = document.querySelector('#show_pi');
var square = document.querySelector('.square');

function Cal_Pi(){
    var x = Math.random();
    var y = Math.random();
    var newSpan = document.createElement('span');
    newSpan.classList.add('dot');
    newSpan.style.top = `${y*100}%`;
    newSpan.style.left = `${x*100}%`;
    if((300*x-150)*(300*x-150)+(300*y-150)*(300*y-150) <= 150*150){
        c_count++;
        newSpan.style.backgroundColor = 'red';
    }
    count++;
    square.appendChild(newSpan);

    pi = 4*c_count/count;
    show_pi.innerHTML = `${pi.toFixed(9)}`;

    if(pi.toFixed(7)==3.1415926){
        clearInterval(Interval);
    }
}

button.addEventListener('click',()=>{
    Interval = setInterval(Cal_Pi,1);
});