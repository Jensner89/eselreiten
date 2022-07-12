var form = document.getElementById("contactForm"),
    actionPath = "https://ortwerth.com/app/web/contact.php";


var xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
    document.getElementById("submitErrorMessage").classList.add('d-none');
    document.getElementById("submitErrorMessage").classList.add('d-none');
    e.preventDefault();

    xhr.onload = function() {
        console.log('DONE: ', xhr.status);
        if (xhr.status == 200) {
            document.getElementById("submitSuccessMessage").classList.remove('d-none');
        } else {
            document.getElementById("submitErrorMessage").classList.remove('d-none');
        }
    };



    xhr.open("POST", actionPath);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    data = "name=" + encodeURIComponent(document.getElementById("name").value) + "&email=" + encodeURIComponent(document.getElementById("email").value) + "&phone=" + encodeURIComponent(document.getElementById("phone").value) + "&message=" + encodeURIComponent(document.getElementById("message").value);
    xhr.send(data);

    //xhr.send('name=' + document.getElementById("name").value + '&email=' + document.getElementById("email").value + "&phone=" + document.getElementById("phone").value + "&message=" + document.getElementById("message").value);



}, false);