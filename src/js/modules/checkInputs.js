const checkInput = (selector) => {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('input', () => {
            item.value = phone.value.replace(/\D/, '');
        });
    });

};

export default checkInput;