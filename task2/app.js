    "use strict";
    var signUpButton = document.getElementById("signUp");
    var signInButton = document.getElementById("signIn");
    var signInButton1 = document.getElementById("signIn").value;

    signUpButton.addEventListener("click", handlerForSignUp);
    signInButton.addEventListener("click", handlerforSignIn);



    function handlerForSignUp(){
        if(getStorage().getItem("users") == null){
            getStorage().setItem("users",JSON.stringify([]));
        }
        var currentLogin = document.getElementById("loginEmail").value;
        var currentPassword = document.getElementById("loginPass").value;
        if(currentLogin && currentPassword) {
            var users = JSON.parse(getStorage().getItem("users"));
            if (users.some(function (user) {
                    return user.login == currentLogin
                })) {
                alert("This login is already in use");
            } else {
                users.push({login: currentLogin, password: currentPassword});
            }
            getStorage().setItem("users", JSON.stringify(users));
        }else{
            alert("Fill in the fields please")
        }
    }

    function handlerforSignIn(){
        var currentLogin = document.getElementById("loginEmail").value;
        var currentPassword = document.getElementById("loginPass").value;
        var users = JSON.parse(getStorage().getItem("users"));
        if(!users.length){
            alert("Please, Sign Up")
        }else{
            if(users.some(function(user){return user.login == currentLogin && user.password == currentPassword})){
                alert("You have been successfully logged in!");

                window.location.href = "http://localhost:8080/user.html";
            }
        }

    }

    function getStorage(){
        return localStorage;
    }





