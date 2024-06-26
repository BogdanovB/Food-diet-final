import tabs from './modules/tabs';
import modal, { openModal } from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', ()   => { //создаю обработчик событий 

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 35000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-04-20');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container : '.offer__slider',
        nextArrow : '.offer__slider-next',
        prevArrow : '.offer__slider-prev',
        slide : '.offer__slide',
        totalCounter : '#total',
        currentCounter : '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});