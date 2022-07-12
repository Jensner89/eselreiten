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

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.open("POST", actionPath);

    data = "data%name%5D=" + document.getElementById("name").value + "&data%5Bemail%5D=" + document.getElementById("email").value + "&data%5Bphone%5D=" + document.getElementById("phone").value + "&data%5Bmessage%5D=" + document.getElementById("message").value;
    xhr.send(data);

    //xhr.send('name=' + document.getElementById("name").value + '&email=' + document.getElementById("email").value + "&phone=" + document.getElementById("phone").value + "&message=" + document.getElementById("message").value);



}, false);