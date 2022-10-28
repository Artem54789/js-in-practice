//classList и делегирование событий
const   btns = document.querySelectorAll('button');
        wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.item(1));// получаем класс под определенным индексом
// console.log(btns[0].classList.length); // показывает сколько классов у элементов
// console.log(btns[1].classList.add('red','asd'));// добовляет css
// console.log(btns[0].classList.remove('bluE')); // удаляет
// console.log(btns[0].classList.toggle('bluE')); // если он есть на элементе то он будет убран если есть добавлен

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener("click",() => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red'); // обычно не пременяется
}); // когда кликаю на первую кнопку проверяю вторую кнопку если нет red тогда добавлен

// console.log(btns[0].className);// устарела не пременять

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target); //в качестве объекта
    // if(event.target && event.target.tagName == "BUTTON")// не все элементы имеют таргет 
    if(event.target && event.target.matches ("button.red"))// любит гугл
    // if(event.target && event.target.classList.contains("bluE"))// если подходит тогда клик пример делегирование
    {
        console.log('Hello')
    }
});

const btn  = document.createElement('button'); // создаем красную кнопку
btn.classList.add('red');
wrapper.append(btn);

// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         console.log('Hello');
//     });
// })
