
const sendForm = () => {
    // обявление переменных
    const errorMessage = 'Что то пошло не так!';
    const loadMessage = 'Загрузка... ';
    const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const inputName = document.getElementsByName('fio')[0];
    const inputTel = document.getElementsByName('tel')[0];
    const form = document.getElementsByName('form-callback')[0];
    const callback = document.getElementById('callback');
    const modalOverlay = document.querySelector('.modal-overlay');

    // валидация полей
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/[^а-яё\s]/ig, '');
        if (inputName.value.length < 2) {
            inputName.setCustomValidity("имя должно быть не меенее 2х символов");
            inputName.reportValidity();
        } else {
            inputName.setCustomValidity("");
        }
    })
    inputTel.setAttribute('maxlength', '12');
    inputTel.addEventListener('input', () => {
        inputTel.value = inputTel.value.replace(/[^0-9|\+]/g, '');
        if (/^\+?(7|8)\d{7,11}$/.test(inputTel.value)) {
            inputTel.setCustomValidity("");
        } else if (inputTel.value.length <= 7) {
            inputTel.setCustomValidity("не менее 7 символов");
            inputTel.reportValidity();
        } else {
            inputTel.setCustomValidity("формат  89991110011");
            inputTel.reportValidity();

        }
    })
    
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
     
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.style.cssText = 'color: #000000;';

        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postSata(body, () => {
            statusMessage.textContent = successMessage;
        }, (error) => {
            statusMessage.textContent = errorMessage;
        });
        let count = 0;
        const removeMessage = setInterval(() => {
            count++;
            if (count >= 3) {
                statusMessage.textContent = successMessage;
            }
            if (count >= 5) {
                clearInterval(removeMessage);
                statusMessage.textContent = '';
                callback.style.cssText = 'display:none; opacity:0; transform:scale(1) translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';
                modalOverlay.style.cssText = 'display:none; opacity:0; transform:translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';
            }
        }, 1000);
        form.reset();


    });
    const postSata = (body) => {
        return new Promise((resolve, project) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(statusMessage.textContent = successMessage);
                } else {
                    project(request.status);
                }
            });
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        })

    }
}

export default sendForm;

