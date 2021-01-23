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
                switch (item.nodeName) {
                    case 'SPAN':
                        state.form = index;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (index == j) {
                                    box.checked = true;
                                }
                            });
                        }
                        else {
                            state[prop] = item.value;
                        };
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            })
        })
    };

    bindActionToElem(windowForm, 'click', 'form');
    bindActionToElem(windowWidth, 'input', 'width');
    bindActionToElem(windowHeight, 'input', 'height');
    bindActionToElem(windowProfile, 'change', 'profile');
    bindActionToElem(windowType, 'change', 'type');
};

export default changeModalState;