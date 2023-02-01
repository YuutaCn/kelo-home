document.addEventListener('DOMContentLoaded', () => {
    const telInputs = document.querySelectorAll('.phone-mask');
    const telMask = new Inputmask('+7 (999) 999-99-99', { "clearIncomplete": true });
    telMask.mask(telInputs);

    const forms = document.querySelectorAll('.send-form');

    forms.forEach(function (form) {
        form.addEventListener('submit', sendForm);
    });
});

function sendForm(e) {
    e.preventDefault();

    const form = e.target;
    form.querySelector('button').disabled = true;
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/mail.php");
    xhr.send(formData);

    xhr.onloadend = function () {
        if (xhr.status == 200) {
            const response = JSON.parse(xhr.response);
            if (response['success']) {
                form.reset();
                showSenk();
                form.querySelector('button').disabled = false;
            } else {
                console.log("Форма не отправлена");
            }
        } else {
            console.log("Ошибка " + this.status);
            form.querySelector('button').disabled = false;
        }
    };
}

function showSenk() {
    document.querySelector('#senk').style.display = 'block';
    setTimeout(() => {
        document.querySelector('#senk').classList.add('show');
    }, 500);
};

document.getElementById('senk').addEventListener('click', (el) => {
    document.getElementById('senk').classList.remove('show');
    document.querySelector('body').classList.remove('modal-open');
    document.querySelectorAll('.modal').forEach(el => {
        el.classList.remove('show');
        el.style.display = "none";
    });
    setTimeout(() => {
        if (document.querySelector('.modal-backdrop')) {
            document.querySelector('.modal-backdrop').style.display = 'none';
        }
        document.getElementById('senk').style.display = 'none';
    }, 500);
});