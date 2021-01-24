const modal = () => {
    function openModal(selectorBtn, selectorPopup, selectorClose, closeClickOverlay = true) {

        const buttons = document.querySelectorAll(selectorBtn),
            popup = document.querySelector(selectorPopup),
            window = document.querySelectorAll('[data-modal]'),
            close = document.querySelector(selectorClose);

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                window.forEach(item => { item.style.display = 'none' });
                popup.style.display = 'block';
                document.body.style.overflow = 'hidden';

            })
        });
        close.addEventListener('click', () => {

            popup.style.display = 'none';
            document.body.style.overflow = '';
        });

        popup.addEventListener('click', (e) => {
            if (popup == e.target && closeClickOverlay) {
                window.forEach(item => { item.style.display = 'none' });

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
    openModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    openModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    openModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    openModalTimer('.popup', 300000);
};

export default modal;