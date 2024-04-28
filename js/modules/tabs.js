function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){

    // TABS

    let tabs = document.querySelectorAll(tabsSelector), // те табы на которые мы кликаем
        tabsContent = document.querySelectorAll(tabsContentSelector),//текст 
        tabsParent = document.querySelector(tabsParentSelector);//родитель который содержит вссе верхние табы


    function hideTabContent(){//СКРЫВАЕТ все не нужные табы
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);// делаем табы активности. подсветка на какую кнопку нажал. а на какую нет.
        });

    }
    // функция которая ПОКАЗЫВЕТ табы
    function showTabContent(i = 0) { //i=0 это когда если вызываешь функцию но без аргумента то по умолчпнию выпустится первый жлемент
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {//обработчик события КЛИКА  
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))){//tabsSelector.slice(1) формирует новую строку без первого символа так как мне тут нужен нуден tabheader__item. А tabsSelector равняется '.tabheader__item' из файла script.js
            tabs.forEach((item, i) => {
    //если жлемент в который мы только что кликнули будет совпадать с элементом которым мы сейчас перебираем. если тыкнул 3й элемент то все закрывает и показывает только 3 элемент
                if (target == item) { 
                    hideTabContent();
                    showTabContent(i);
                }

            });

        }
    });

}

export default tabs;