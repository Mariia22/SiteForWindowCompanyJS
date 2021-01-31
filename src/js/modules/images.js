const images = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const imagesDiv = document.querySelector('.works');
    div.classList.add('popup');
    imagesDiv.appendChild(div);
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.display = 'none';
    div.appendChild(img);

    imagesDiv.addEventListener('click', () => {

        e.preventDefault();
        const target = e.target;
        if (target && target.contains('preview')) {
            div.classList.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            img.setAttribute('src', path);
        }
        if (target && target.matches('div.popup')) {
            div.classList.display = 'none';
        }
    });
};
export default images;