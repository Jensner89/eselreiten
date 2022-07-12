var form = document.getElementById("contactForm"),
    actionPath = "https://ortwerth.com/app/web/contact.php";


var xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
    document.getElementById("submitErrorMessage").classList.add('d-none');
    document.getElementById("submitErrorMessage").classList.add('d-none');

    e.preventDefault();

    formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("message", document.getElementById("message").value);


    xhr.onload = function() {
        console.log('DONE: ', xhr.status);
        if (xhr.status == 200) {
            document.getElementById("submitSuccessMessage").classList.remove('d-none');
        } else {
            document.getElementById("submitErrorMessage").classList.remove('d-none');
        }
    };

    xhr.open("POST", actionPath);
    xhr.send('name=' + document.getElementById("name").value + '&email=' + document.getElementById("email").value + "&phone=" + document.getElementById("phone").value + "&message=" + document.getElementById("message").value);



}, false);