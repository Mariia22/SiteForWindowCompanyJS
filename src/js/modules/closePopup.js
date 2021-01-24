const closePopup = (selector) => {
    const popup = document.querySelector(selector);
    popup.style.display = 'none';
    document.body.style.overflow = '';
}

export default closePopup;