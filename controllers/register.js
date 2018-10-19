(function() {

    /* Setting up event listeners */

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
    })

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