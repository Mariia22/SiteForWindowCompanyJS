import checkInput from './checkInputs';

const sendForm = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkInput('input[name = "user_phone"]');
    /* phones.forEach(phone => {
         phone.addEventListener('input', () => {
             phone.value = phone.value.replace(/\D/, '');
         });
     });*/

    const messages = {
        loading: 'Идет загрузка',
        success: 'Данные успешно отправлены',
        failure: 'Что-то пошло не так'
    };

    const clearInput = () => {
        inputs.forEach(item => item.value = '');
    };

    const sendData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            sendData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = messages.success;
                })
                .catch(() => statusMessage.textContent = messages.failure)
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};


export default sendForm;