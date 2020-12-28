const modal = () => {
    function openModal(selectorBtn, selectorPopup, selectorClose) {

        const buttons = document.querySelectorAll(selectorBtn),
            popup = document.querySelector(selectorPopup),
            close = document.querySelector(selectorClose);

        buttons.forEach(button => button.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';

        }));
        close.addEventListener('click', () => {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        });
        popup.addEventListener('click', (e) => {
            if (popup == e.target) {
                popup.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function openModalTimer(selectorPopup, time) {
        setTimeout(() => {
            const popup = document.querySelector(selectorPopup);
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }
    openModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    openModal('.phone_link', '.popup', '.popup .popup_close');
    openModalTimer('.popup', 300000);
};

export default modal;