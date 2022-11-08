window.addEventListener("DOMContentLoaded", () => {

    // Tabs

    const   tabs =document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach( item => {
            // item.style.display = 'none'; // инлайн стили можно так
            item.classList.add('hide'); //но обычно так через файл css
            item.classList.remove('show', 'fade');//удаляем анимацию
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';// инлайн стили можно так
        tabsContent[i].classList.add('show', 'fade'); // добавляем
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>{
        const  target = event.target; // для того чтобы много не писать
        
        if (target && target.classList.contains('tabheader__item')){// проверяем на таргет и точная проверка
            tabs.forEach((item, i) =>{
                if (target == item){ // если таргет будет совпадать с элементом перебора
                    hideTabContent();
                    showTabContent(i);
                }
            });
        } 
    });

    //Timer

    const deadline = '2022-11-10';

    function getTimeRamaining(endtime) {
        const   t = Date.parse(endtime) - Date.parse(new Date()),// разница милллисекунд
                days = Math.floor(t / (1000 * 60 * 60 * 24)),//округление до целого сколько в сутках милисикунд.. сколько осталось до окончания даты
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),//делит первый аргумент и оставляет остаток от деления
                minutes = Math.floor (( t / 1000 / 60) % 60),
                seconds = Math.floor (( t / 1000 ) % 60);

                return {
                    "total": t, 
                    "days": days,
                    "hours": hours,
                    "minutes": minutes,
                    "seconds": seconds
                };
        }

        function getZero (num) { //добавление 0 если однозначное число
            if (num >= 0 && num <= 10) {
                return `0${num}`;
            }else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const   timer = document.querySelector(selector),
                    days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateClock, 1000);

            updateClock(); // чтобы не маргала

            function updateClock() {
                const t = getTimeRamaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock(".timer", deadline);


        // Modal //
    
        const   modalTrigger = document.querySelectorAll('[data-modal]'),
                modal = document.querySelector('.modal'),
                modalCloseBtn = document.querySelector('[data-close]');

        function openModal () {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId); // убераем интервал 
        }

        modalTrigger.forEach(btn => {// псевдомассив не может работать с обработчиком событием
            btn.addEventListener('click', openModal);//() => {
                // modal.classList.add('show');
                // modal.classList.remove('hide');// так
                // // modal.classList.toggle('show');// или так 
                // document.body.style.overflow = 'hidden'; // зафиксировать страницу
        });

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);


        modal.addEventListener('click', (e) => { // нужна e если мы его используем
            if (e.target === modal){// закрывает по клику мимо модального окна
                closeModal();
                // modal.classList.add('hide'); // не повторяй код
                // modal.classList.remove('show');
                // document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape"&& modal.classList.contains('show')){ //ЕСЛИ Escape И модальное окно открыто  тогда работет Escape
                closeModal();
            }
        });
        
        // const modalTimerId = setTimeout(openModal, 5000); // открытие через 5 сек

        function showModalByScroll () {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){//  прокрученная часть + и видимая часть без прокрутки >= с полной прокрутки тогда долистал до конца
                openModal();
                window.removeEventListener('scroll',showModalByScroll); // чтобы сработало один раз 
            }
        }

        window.addEventListener('scroll',showModalByScroll); // {once: true}только один раз но не тут того чтобы 1 раз сработало

        //искользуем классы для карточек Классический пример шаблонизации//

        class MenuCard {
            constructor(src, alt, title, descr, price, parantSelector) {
                this.src = src;
                this.alt = alt; 
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.parent = document.querySelector(parantSelector);//дом элемент 
                this.transfer = 27;
                this.cdangeToUAH();// вызываем метод
            }

            cdangeToUAH() {
                this.price = +this.price * this.transfer;
            }

            render() {//
                const element = document.createElement('div');// создали элемент
                element.innerHTML = `
                    <div class="menu__item">
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
                `;// динамичиски сфотмировали структуру
                this.parent.append(element);// добавляем созданный элемент в дом
            }
        }

        new MenuCard(// если объект используется только на месте / и не где больше
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container'
        ).render(); //создали новую карточку
        
        new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container'
        ).render(); //2

        new MenuCard(// 3
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container'
        ).render(); 
        
        
        // const div = new MenuCard();// стандартный синтаксис
        // div.render();
    });


