import checkInput from './checkInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkInput('#width');
    checkInput('#height');

    /*windowForm.forEach((item, index) => {
        item.addEventListener('click', () => {
            state.form = index;
            console.log(state);
        });
    });*/

    function bindActionToElem(elem, event, prop) {
        elem.forEach((item, index) => {
            item.addEventListener(event, () => {
                //state[prop] = index;
            })
        })
    };

    bindActionToElem(windowForm, 'click', 'form');
};

export default changeModalState;