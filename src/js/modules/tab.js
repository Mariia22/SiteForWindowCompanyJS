const tab = (tabSelector, contentSelector, headerSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        contents = document.querySelectorAll(contentSelector),
        tabs = document.querySelectorAll(tabSelector);

    function showContent(i) {
        content[i].style.display = 'none';
        tab[i].class.add(activeClass);
    }
    function hideContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].class.remove(activeClass);
    }
    header.addEventListener('click', (e) => {
        const target = e.target;
        const selector = tabSelector.replace(/\./, '');
        if (target.contains(selector) || target.parentNode.contains(selector)) {
            console.log('Pfikb');
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i] = target) {
                    showContent(i);
                }
            }
        }
    })
}

export default tab;