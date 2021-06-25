function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');
    let modules = {};

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value == 'Select module') {
            return;
        }

        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];
        }

        let currentLecture = { name: lectureNameElement.value, date: formatDate(lectureDateElement.value) }
        modules[lectureModuleElement.value].push(currentLecture);

        lectureNameElement.value = '';
        lectureDateElement.value = '';
        lectureModuleElement.value = 'Select module'

        createTrainings(modules);
    });

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';

        for (const moduleName in modules) {
            let moduleElement = createModule(moduleName);
            let lectureListElement = document.createElement('ul');

            // Sort lectures
            let lectures = modules[moduleName];
            lectures
                .sort((a, b) => a.date.localeCompare(b.date))
                .forEach(({ name, date }) => {
                    let lectureElement = createLecture(name, date, moduleName);
                    lectureListElement.appendChild(lectureElement);

                    let deleteButtonElement = lectureElement.querySelector('button')
                    deleteButtonElement.addEventListener('click', (e) => {
                        modules[moduleName] = modules[moduleName]
                            .filter(x => !(x.name == name && x.date == date))

                        if (modules[moduleName].length == 0) {
                            delete modules[moduleName];
                            // e.currentTarget.closest('.module').remove()
                            e.currentTarget.parentNode.parentNode.parentNode.remove();
                        } else {
                            e.currentTarget.parentNode.remove();
                        }

                        console.log(modules);
                    });
                });

            moduleElement.appendChild(lectureListElement);
            modulesElement.appendChild(moduleElement);
        }
    }

    function createModule(name) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        divElement.appendChild(headingElement);

        return divElement;
    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${date}`

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }
};