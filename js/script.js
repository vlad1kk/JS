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
