var form = document.getElementById("contactForm"),
    actionPath = "https://ortwerth.com/app/web/contact.php";
formData = null;

var xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
    document.getElementById("submitErrorMessage").classList.add('d-none');
    document.getElementById("submitErrorMessage").classList.add('d-none');

    e.preventDefault();

    formData = new FormData(form);
    actionPath = form.getAttribute("action");
    xhr.onload = function() {
        console.log('DONE: ', xhr.status);
        if (xhr.status == 200) {
            document.getElementById("submitSuccessMessage").classList.remove('d-none');
        } else {
            document.getElementById("submitErrorMessage").classList.remove('d-none');
        }
    };

    xhr.open("POST", actionPath);
    xhr.send(formData);



}, false);