(function() {

    /* Setting up event listeners */

    document.getElementById('login-tab').addEventListener('click', function() {
        var loginTab = document.getElementById('login-tab');
        var registerTab = document.getElementById('register-tab');

        var loginForm = document.getElementById('login-form');
        var registerForm = document.getElementById('register-form');

        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';

        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    });

    document.getElementById('register-tab').addEventListener('click', function() {
        var loginTab = document.getElementById('login-tab');
        var registerTab = document.getElementById('register-tab');

        var loginForm = document.getElementById('login-form');
        var registerForm = document.getElementById('register-form');

        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';

        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    });

    document.getElementById('register-user').addEventListener('click', function() {
        var usernameField = document.getElementById('user-username');
        var emailField = document.getElementById('user-email');
        var nameField = document.getElementById('user-name');
        var ageField = document.getElementById('user-age');

        var username = usernameField.value;
        var email = emailField.value;
        var name = nameField.value;
        var age = ageField.value;
        
        if(isEmailValid(email))
            registerUser(username, email, name, age);
    });

    /* Setting up event handlers */

    function isEmailValid(email) {
        var atFlag = email.indexOf('@') > -1;
        var dotFlag = email.indexOf('.' > -1);
        return atFlag && dotFlag;
    }

    function registerUser(username, email, name, age){
        firebase.database().ref('users/' + username).set({
            email: email,
            name: name,
            age: age
        });
    }

})();