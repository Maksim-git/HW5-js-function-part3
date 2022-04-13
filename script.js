console.log('--------- #4(Упрощенный вариант)')

function ascendingNumber (a, b){
    if (a > b) {
        return
    }
    console.log(a)
    ascendingNumber(a + 1, b)
}

ascendingNumber(1, 10)

console.log('--------- #4(Усложненный вариант)')

function descendingNumber(a, b) {
    console.log(a);
    if (a < b) {
        a++;
    } else if (a > b) {
        a--;
    } else {
        return;
    }
    descendingNumber(a, b);
}
descendingNumber(10, 1);

console.log('-------------- # 5 Часы на экране - Первый вариант')

const displayTime = document.getElementById('display-time');
  
function getCurrentTimeString() {
   return new Date().toTimeString().replace(/ .*/, '');
}
  
setInterval(() => displayTime.innerHTML = getCurrentTimeString(),1000);


