const car = document.getElementsByName("car");
const button = document.querySelector(".button")
function whichCar(){
      if(car[0].checked) {
           alert('Haval made in China');
        } else if (car[1].checked) {
        alert('Audi made in German');
        } else if (car[2].checked) {
            alert('Lexus made in Japan');
        }
    } 
button.addEventListener("click", whichCar);






// function fun1(){
//     let checkbox;
//     checkbox = document.getElementById('one');

//     if(checkbox.checked) {
//         alert('Вибраний');
//     } else {
//         alert('Не вибраний');
//     }
// }
// function fun1(){
//     let radio = document.getElementsByName('r1');
//     for (i = 0; i < radio.length; i ++){
//         if(radio[i].checked) {
//             alert('Вибраний ' + i + ' елемент');
//         }
//     }
// }