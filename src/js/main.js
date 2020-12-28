import './slider';
import modal from './modules/modal';
import tab from './modules/tab';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tab('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
});