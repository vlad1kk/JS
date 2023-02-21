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
