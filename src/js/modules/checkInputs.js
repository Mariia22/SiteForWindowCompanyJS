const checkInput = (selector) => {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
    console.log('gjjhh');
};

export default checkInput;