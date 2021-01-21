import './slider';
import modal from './modules/modal';
import tab from './modules/tab';
import sendForm from './modules/sendForm';
import changeModalState from './modules/modalState';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    changeModalState(modalState);
    modal();
    tab('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tab('.no_click', '.decoration_content > div>div', '.decoration_slider', 'after_click');
    tab('.balcon_icons_img', '.big_img>img', '.balcon_icons', 'do_image_more', 'inline-block');
    sendForm();
});