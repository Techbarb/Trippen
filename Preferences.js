document.addEventListener('DOMContentLoaded', () => {
    const currentDate = document.querySelector(".current-date"),
        daysTag = document.querySelector(".days"),
        prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let selectedDates = [];

    const renderCalendar = () => {
        let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
        let liTag = "";

        for (let i = 0; i < firstDayofMonth; i++) {
            liTag += `<li></li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            const dateStr = `${currYear}-${currMonth + 1}-${i}`;
            const isSelected = selectedDates.includes(dateStr) ? 'selected' : '';
            liTag += `<li class="${isSelected}" data-date="${dateStr}">${i}</li>`;
        }

        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
        addDateClickEvent();
    };

    const addDateClickEvent = () => {
        const days = daysTag.querySelectorAll('li');
        days.forEach(day => {
            day.addEventListener('click', () => {
                const dateStr = day.dataset.date;
                if (selectedDates.includes(dateStr)) {
                    selectedDates = selectedDates.filter(date => date !== dateStr);
                    day.classList.remove('selected');
                } else {
                    selectedDates.push(dateStr);
                    day.classList.add('selected');
                }
            });
        });
    };

    renderCalendar();

    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if (currMonth < 0 || currMonth > 11) {
                date = new Date(currYear, currMonth);
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            }
            
            renderCalendar();
        });
    });

    document.getElementById('preferencesForm').addEventListener('submit', savePreferences);

    function savePreferences(event) {
        event.preventDefault(); // Prevent form submission

        // Get selected dates
        const dates = selectedDates;

        // Get budget input value
        const budget = document.getElementById('budget').value;
        const currency = document.getElementById('currency').value;

        // Get all selected preferences
        let preferences = [];
        const checkboxes = document.getElementsByName('preference');
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                preferences.push(checkbox.value);
            }
        });

        // Save to localStorage
        localStorage.setItem('dates', JSON.stringify(dates));
        localStorage.setItem('budget', budget);
        localStorage.setItem('currency', currency);
        localStorage.setItem('preferences', JSON.stringify(preferences));

        // Redirect to the next page
        window.location.href = 'planning.html';
    }
});
