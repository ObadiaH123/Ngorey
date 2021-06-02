$(document).ready(function() {
    var lgnbtn = document.querySelector('#login');
    lgnbtn.addEventListener('submit', login)

    function login(e) {
        // e.preventDefault()

        const inputtedIndex = document.querySelector('#inputtedIndex')
        const inputtedPassword = document.querySelector('#inputtedPassword')

        var newIndex = inputtedIndex.value;
        var newPass = inputtedPassword.value;
        var retrieved = JSON.parse((localStorage.getItem('user')))

        if (newIndex === "" || newPass === "") {
            alert('Fields cannot be empty')
            return false
        } else if (newIndex != retrieved.index || newPass != retrieved.password) {
            alert('wrong credentials!!!')
            window.open('login.html');
            return false;
        } else {
            // alert("Login successfully");
            window.open('form.html');
        }
    }
})