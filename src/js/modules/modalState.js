const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    /* windowWidth = document.querySelector('#width'),
     windowHeight = document.querySelector('#height'),
     typeWindow = document.querySelector('.form-control'),
     windowProfile = document.querySelector('.checkbox');*/


    windowForm.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item);
            state.form = item;
            console.log(state);
        })
    });
};

export default changeModalState;