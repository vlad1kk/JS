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

function funFrurs(){
    const fruts = document.getElementById('mySelect').selectedIndex;
    const options = document.getElementById('mySelect').options;
    alert('You tried to eat it ' + options[fruts].text + '?');
}
const frutsClass = document.getElementById('mySelect');
frutsClass.addEventListener('change', funFrurs);
// =================================================

function range(){
    const rng = document.getElementById('range');
    const i1 = document.getElementById('i1');
    i1.value = rng.value;
}
const rangeId = document.getElementById('range');
rangeId.addEventListener('input', range);
// =================================================

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