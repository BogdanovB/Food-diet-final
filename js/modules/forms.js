import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    //FORMS 84 урок

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'спасибо!',
        failure: 'что то не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // ОТМЕНИТЬ стандартное поведение браузера. всегда идет в НАЧАЛЕ ! 
            
            const statusMessage = document.createElement('img');//куда отправлять MESSAGE. выше его инициал.
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);//выведем в консоль то что нам вернул сервер
                showThanksModal(message.success); // 
                statusMessage.remove();//удаляем спинер.
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();//отчистить валуе когда все норм. отчистка формы
            });
        });
    }


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div'); // создание нового контента. блок обертка.
        thanksModal.classList.add('modal__dialog');// этому ДИВУ мы назначаем классы чтобы ноормально выглядил.
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        },4000);
    }

}

export default forms;