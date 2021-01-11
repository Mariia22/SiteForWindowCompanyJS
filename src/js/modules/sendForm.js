const sendForm = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInput = document.querySelectorAll('input[name = "user-phone"]');

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
            method: 'POST',
            data: data
        });

        return await res.text();
    };

    forms.forEach(item => item.addEventListener('submit', e => {
        e.preventDefault();

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('.status');
        item.appendChild(messageDiv);

        const data = new FormData(item);
        sendData('assets/server.php', data)
            .then(res => messageDiv.textContent = messages.success)
            .catch(() => messageDiv.textContent = messages.failure)
            .finally(() => {
                clearInput();
                setTimeout(() => { messageDiv.remove() }, 5000)
            }
            )

    }));
};

export default sendForm;