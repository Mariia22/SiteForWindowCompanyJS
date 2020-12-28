import './slider';
import modal from './modules/modal';
import tab from './modules/tab';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tab('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tab('.no_click', '.decoration_content > div>div', '.decoration_slider', 'after_click');
    sendForm();
});