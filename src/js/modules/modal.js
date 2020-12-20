const modal = () => {
    function openModal(selectorBtn, selectorPopup, selectorClose) {

        const button = document.querySelector(selectorBtn),
            popup = document.querySelector(selectorPopup),
            close = document.querySelector(selectorClose);

        button.addEventListener('click', () => {
            popup.style.display = 'block';
        });

    }
    console.log(3);
};

export default modal;