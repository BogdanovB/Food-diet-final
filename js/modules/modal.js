function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';// когда нажимаю на конпку СВЯЗАТЬСЯ С НАМИ я не могу крутить колесико. фон не двигается ОБРАТНО

}

function openModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // когда нажимаю на конпку СВЯЗАТЬСЯ С НАМИ я не могу крутить колесико. фон не двигается
    
    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);//если я открывал уже модалное окно то оно не будет вываливаться каждые 3 секунды
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) { 
   //Modal 

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
         //modalCloseBtn = document.querySelector('[data-close]');


    modalTrigger.forEach(btn => { // это псевдомассив поэтому иду в форич 
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId)); //создаю стрелочную функцию чтобы действие происходило тогда когда я нажимаю клик. а если бы просто ('click', openModal(modalSelector)) оставил бы то она сразу вызывалась бы.
    });



    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
    if(e.target === modal || e.target.getAttribute('data-close') == '') { //если кликаем на подложеу или кликаем на крестик то закрывается можальное окно.  если будет соввпадать с модальным окном на которое и был повещан обработчик событий 
        closeModal(modalSelector);  
    }
    });


    document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) { // если нажимаю на ESCAPE и модалка открыта то тогда закрывает ее
        closeModal(modalSelector);
    }

    });

    

    function showModalByScroll(){
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal(modalSelector, modalTimerId);//когда докрутил до низу выводил модальное окно 
        window.removeEventListener('scroll', showModalByScroll);// и потом удаляем этот обработчик событий.
    }
    }
    window.addEventListener('scroll', showModalByScroll);



}


export default modal;
export {closeModal};
export {openModal};

