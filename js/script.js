// radio:
const car = document.getElementsByName("car");
const buttonRadio = document.getElementById("button_radio")
function whichCar(){
      if(car[0].checked) {
            alert('Haval made in China');
        } else if (car[1].checked) {
            alert('Audi made in German');
        } else if (car[2].checked) {
            alert('Lexus made in Japan');
        }
    } 
buttonRadio.addEventListener("click", whichCar);
// =================================================

// select:
function funFrurs(){
    const fruts = document.getElementById('mySelect').selectedIndex;
    const options = document.getElementById('mySelect').options;
    alert('You tried to eat it ' + options[fruts].text + '?');
}
const frutsClass = document.getElementById('mySelect');
frutsClass.addEventListener('change', funFrurs);
// =================================================

// range:
function range(){
    const rng = document.getElementById('range');
    const i1 = document.getElementById('i1');
    i1.value = rng.value;
}
const rangeId = document.getElementById('range');
rangeId.addEventListener('input', range);
// =================================================

// Range+css:
function rangeCss(){
    const rtl = document.getElementById('rtl').value;
    const rtr = document.getElementById('rtr').value;
    const rbl = document.getElementById('rbl').value;
    const rbr = document.getElementById('rbr').value;

    const ttl = document.getElementById('ttl');
    const ttr = document.getElementById('ttr');
    const tbl = document.getElementById('tbl');
    const tbr = document.getElementById('tbr');

    const block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px ';
}
    const rtlAdd = document.getElementById('rtl');
    rtlAdd.addEventListener('input', rangeCss);

    const rtrAdd = document.getElementById('rtr');
    rtrAdd.addEventListener('input', rangeCss);

    const rblAdd = document.getElementById('rbl');
    rblAdd.addEventListener('input', rangeCss);

    const rbrAdd = document.getElementById('rbr');
    rbrAdd.addEventListener('input', rangeCss);
// =================================================

// ?????????????????? ????????:
document.getElementById('nav').onmouseover = function(event){
    let target = event.target;
    if(target.className == 'menu-item'){
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function(event){
    let target = event.target;
    console.log(event.target);
    if(target.className != 'menu-item' && target.className != 'submenu'){
        closeMenu();
    }
}

function closeMenu(){
    let menu = document.getElementById('nav');
    let subm = document.getElementsByClassName('submenu');
    for(let i=0; i<subm.length; i++){
        subm[i].style.display = 'none';
    }
}
// =================================================

// Tabs:
let tab;
let tabContent;

window.onload = function(){
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a){
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick = function(event){
    let target = event.target;
    if(target.className == 'tab'){
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
// =================================================

// Modal window:
let modal = document.getElementById('myModal');
let mbtn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

mbtn.onclick = function(){
    modal.style.display = 'block';
}
span.onclick = function(){
    modal.style.display = 'none';
}
window.onclick = function(event){
    let targer = event.target;
    if(targer == modal){
        modal.style.display = 'none';
    }
}
// =================================================

// Animation:
function myMove(){
    let elem = document.getElementById('myAnimation');
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 250){
            clearInterval(id);
        } else {
            pos ++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}
// =============================================

// ??ounter:
let nmb = document.querySelector('.couter-nmb');
let inc = document.querySelector('.inc-btn');
let dec = document.querySelector('.dec-btn');
let clr = document.querySelector('.clr-btn');

let counter = 0;

function render(){
    nmb.innerHTML = counter;
}
function increment(){
    counter += 1;
}
function decrement(){
    if(counter >= 1){
        counter -= 1;
    } else{
        return;
    } 
}
function clear(){
    counter = 0;
}
render()
inc.addEventListener('click', () => {
    increment()
    render()
})
dec.addEventListener('click', () => {
    decrement()
    render()
})
clr.addEventListener('click', () => {
    clear()
    render()
})
// =============================================
// Question:
let jsInputYear = document.querySelector('.js-inpt-year');
let jsBtnYear = document.querySelector('.js-btn-year');
let jsOutput = document.querySelector('.js-output');

jsBtnYear.addEventListener('click', function(){
    let answer = jsInputYear.value;
    if(answer == 2023){
        jsInputYear.style.border = '2px solid green';
        jsInputYear.style.borderRadius = '3px';
        jsOutput.innerHTML = "?????????????????? ??????????????????!";
    } else if (answer === ''){
        jsInputYear.style.border = '2px solid #ea0404';
        jsInputYear.style.borderRadius = '3px';
        jsOutput.innerHTML = "?? ???????? ?????????? ???????????? ???? ??????????????";

    } else if(answer != 2023){
        jsInputYear.style.border = '2px solid #ea0404';
        jsInputYear.style.borderRadius = '3px';
        jsOutput.innerHTML = "?????????????????? ???? ??????????????????!";
    }
})

// =============================================

// Todo list:
let divOutput = document.querySelector('.div-output');
let inpText = document.querySelector('.inp-text');
let subBtn = document.querySelector('.sub-btn');

let todos = [];

function addTodos(text){
    const todo = {
        id: `${Math.random()}`,
        text,
        done: false,
    };
    todos.push(todo);
}
function deleteTodos(id) {
    todos.forEach(todo => {
        if(todo.id == id){
            todo.done = true;
        }
    })
}
function renderer(){
    let html = ``;

    todos.forEach(todo => {
        if(todo.done){
            return;
        }
        html += `
        <div>
        ${todo.text} <button data-id='${todo.id}'>Done</button>
        </div>
        `
    });

    divOutput.innerHTML = html;
}
subBtn.addEventListener('click', () => {
    const text = inpText.value;

    addTodos(text);
    renderer();
    
})
divOutput.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON'){
        return;
    }
    const id = event.target.dataset.id;

    deleteTodos(id);
    renderer();
})
// =============================================

// :