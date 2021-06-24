function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModulElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value ||
            !lectureDateElement.value ||
            !lectureModulElement.value == 'Select module') {
            return;
        }

        // TODO: Create lecture
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent =
            `${lectureNameElement.value} - ${formatDate(lectureDateElement.value)}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        console.log(liElement);
        // TODO: Create module
    });

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');
        return `${date} - ${time}`;
    }
};