window.addEventListener("DOMContentLoaded", () => {

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
});
