const timer = (selector, deadline) => {
    function addZero(num) {
        if (num <= 9) {
            return '0' + num;
        }
        else {
            return num;
        }
    }
    function getTimerRemaining(endtime) {
        let now = Date.parse(new Date());
        let end = Date.parse(endtime);
        let total = end - now;
        let seconds = Math.floor((total / 1000) % 60);
        let minutes = Math.floor((total / 1000 / 60) % 60);
        let hours = Math.floor((total / 1000 / 60 / 60) % 24);
        let days = Math.floor(total / 1000 / 60 / 60 / 24);

        return {
            'total': total,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        }

    }

    const setClock = (selector, endtime) => {
        const container = document.querySelector(selector),
            secondsContainer = container.querySelector('#seconds'),
            minutesContainer = container.querySelector('#minutes'),
            hoursContainer = container.querySelector('#hours'),
            daysContainer = container.querySelector('#days'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const time = getTimerRemaining(endtime);
            secondsContainer.textContent = addZero(time.seconds);
            minutesContainer.textContent = addZero(time.minutes);
            hoursContainer.textContent = addZero(time.hours);
            daysContainer.textContent = addZero(time.days);

            if (time.total <= 0) {
                secondsContainer.textContent = '00';
                minutesContainer.textContent = '00';
                hoursContainer.textContent = '00';
                daysContainer.textContent = '00';
                clearInterval(timeInterval);

            }
        }
    }
    setClock(selector, deadline);
}
export default timer;
