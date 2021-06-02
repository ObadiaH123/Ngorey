window.onload = (event) => {

    function User(fname, lname, email, index, password, cpassword) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.index = index;
        this.password = password;
        this.cpassword = cpassword;

    }
    var firstName = document.querySelector('#fname');
    var lastName = document.querySelector('#lname');
    var studentEmail = document.querySelector('#email');
    const studentIndex = document.querySelector('#index');
    const studentPassword = document.querySelector('#password');
    var studentCpassword = document.querySelector('#cpassword');
    var regbtn = document.querySelector('#register');


    regbtn.addEventListener('submit', register);

    function register(e) {
        var newUser = new User(firstName.value, lastName.value, studentEmail.value, studentIndex.value, studentPassword.value, studentCpassword.value);


        if (firstName.value === '' || lastName.value === '' || studentEmail.value === "" || studentIndex.value === "" || studentPassword.value === "" || studentCpassword.value === "")
            alert('All fields are required')


        localStorage.setItem('user', JSON.stringify(newUser))


        // e.preventDefault();
    }


}