//classList и делегирование событий
// const   btns = document.querySelectorAll('button');
//         wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.item(1));// получаем класс под определенным индексом
// console.log(btns[0].classList.length); // показывает сколько классов у элементов
// console.log(btns[1].classList.add('red','asd'));// добовляет css
// console.log(btns[0].classList.remove('bluE')); // удаляет
// console.log(btns[0].classList.toggle('bluE')); // если он есть на элементе то он будет убран если есть добавлен

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener("click",() => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }else {
    //     btns[1].classList.remove('red');
    // }

//     btns[1].classList.toggle('red'); // обычно не пременяется
// }); // когда кликаю на первую кнопку проверяю вторую кнопку если нет red тогда добавлен

// console.log(btns[0].className);// устарела не пременять

// wrapper.addEventListener('click', (event) => {
    // console.dir(event.target); //в качестве объекта
    // if(event.target && event.target.tagName == "BUTTON")// не все элементы имеют таргет 
    // if(event.target && event.target.matches ("button.red"))// любит гугл
    // if(event.target && event.target.classList.contains("bluE"))// если подходит тогда клик пример делегирование
//     {
//         console.log('Hello')
//     }
// });

// const btn  = document.createElement('button'); // создаем красную кнопку
// btn.classList.add('red');
// wrapper.append(btn);

// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         console.log('Hello');
//     });
// })

//*** Скрипты и время их выполнения. setTimeout и setInterval ***//


// const timeId = setTimeout(function () {
//     console.log(hello);
// }, 2000,"hello"); // запускаеет фунцию через время в м/с

// const   btn = document.querySelector('.btn');
// let     timeId, // для перезаписывания
//         i=0;


//двигаем квадрат
    // function myAnimation () {
    //     const elem = document.querySelector('.box');
    //     let pos = 0;

    //     const id = setInterval(frame, 10);
    //     function frame () {
    //         if (pos == 300) { // размер бокса должна остановиться
    //             clearInterval();
    //         } else{
    //             pos++;
    //             elem.style.top = pos + 'px';
    //             elem.style.left = pos + 'px';
    //         }
    //     }
    // }

    // btn.addEventListener("click",myAnimation );

// btn.addEventListener("click", () =>{
//     // const timeId = setTimeout(logger, 2000); // локальная переменная
//     timeId = setInterval(logger, 500); //каждые 2 сек срабатывает
// });

// function logger () {
//     if (i===3){
//         clearInterval(timeId); // остановили таймер
//     }
//     console.log('text');
//     i++; //
// }

// пример рекурсивного сет такймаута
// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

// setTimeout(logger, 2000); 

// function logger () {
//     console.log('text');
// }

// *** работа с датами *** // 
// const now = new Date(); //какая дата сейчас
// const now = new Date('2022-10-30');
// const now = new Date(2022, 5, 1, 20);
// const now = new Date(0); // храниться в м/с с начала 1970 г
// const now = new Date(-9999999);
// const now = new Date("2022-05-01");
// new Date.parse("2022-05-01");

// console.log(now.setHours(18, 40)); // в браузере видно в консоле нет//есть автоисправление
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());// воскресенье 0
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());// разница с 0 поясом
// console.log(now.getTime());// разница с 1970 годом

// let start = new Date ();

// for (let i = 0; i <1000000; i++) {
//     let some = 1 ** 3; // ** возвести в степень
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} милллисекунд`);

//***  Параметры документа окна и работа с нимим***//

// console.dir(document);/// какие едементы в документе

// const   box = document.querySelector('.box'),
//         btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight; // видимая часть 

// const width = box.scrollWidth;
// const height = box.scrollHeight; // полоса прокрутки не включается , но все остальное включается

// console.log(width, height);

// btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; //инлай стили //устанавливаем всю высоту при клике
//     console.log(box.scrollTop);//сколько я отлистал теста 
// });

// console.log(box.getBoundingClientRect().top);// координаты которые есть у элемента считает от левого вверхнего угла

// const style = window.getComputedStyle(box); // все стили объекта из css

// console.log(style.display);

// console.log(document.documentElement.scrollTop); // чтобы получить значение 

/// *** Фунции - конструкции *** ///
//  в js изночально не было классов они появились в качестве синтаксического сахара


// const num = new Function(3); // устарелый тип
// console.log(num); 
// function User(name, id) { // для каждого отдельного пользователя есть имя и ид
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);// создав метод в прототипе будет у всех потомках
//     };
// }// для конструирования объектов и создание подобных копий

// User.prototype.exit = function() { /// прототипно будет наследоваться и этот метод
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);// внутри переменной не фунция а объект
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);  