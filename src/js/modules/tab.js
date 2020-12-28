const tab = (tabSelector, contentSelector, headerSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        contents = document.querySelectorAll(contentSelector),
        tabs = document.querySelectorAll(tabSelector);

    function showContent(i = 0) {
        contents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
    function hideContent() {
        contents.forEach(content => content.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove(activeClass));
    }
    header.addEventListener('click', (e) => {
        const target = e.target;
        const selector = tabSelector.replace(/\./, '');
        if (target.classList.contains(selector) || target.parentNode.classList.contains(selector)) {
            /*for (let i = 0; i < tabs.length; i++) {
                if (tabs[i] == target || tabs[i] == target.parentNode) {
                    hideContent();
                    showContent(i);
                }
            }*/
            tabs.forEach((item, i) => {
                if (item == target || item == target.parentNode) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    })
}

export default tab;