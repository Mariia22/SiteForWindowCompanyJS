const sendForm = () => {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        phoneInput = document.querySelectorAll('input[name = "user-phone"]');

    const messages = {
        loading: 'Идет загрузка',
        success: 'Данные успешно отправлены',
        failure: 'Что-то пошло не так'
    };
};

export default sendForm;