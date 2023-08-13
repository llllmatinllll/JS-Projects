const $ = document;
// Variables
let btn = $.getElementById("btn");
let userName = $.getElementById("username");
let password = $.getElementById("password");
let mainBox = $.getElementById("main-box");
let modal = $.getElementById("modal");
let modalText = $.querySelector(".modal-text");
let passwordCheckText = $.querySelector(".password-check-text");
let userNameCheckText = $.querySelector(".username-check-text");

// userName Validation
userName.addEventListener("keyup", () => {
    let userNmaeValue = userName.value;
    if (userNmaeValue.length < 12) {
        userNameCheckText.style.display = "block";
        userNameCheckText.style.color = "darkred";
        userNameCheckText.innerHTML = userNmaeValue.length + " of 12";
    } else {
        userNameCheckText.style.display = "block";
        userNameCheckText.innerHTML = userNmaeValue.length + " of 12";
        userNameCheckText.style.color = "green";
    }
    if (userNmaeValue.length == 0) {
        userNameCheckText.style.display = "none";
    }
});

// Password Validation
password.addEventListener("keyup", () => {
    let passwordValue = password.value;
    if (passwordValue.length < 8) {
        passwordCheckText.style.display = "block";
        passwordCheckText.innerHTML = passwordValue.length + " of 8";
        passwordCheckText.style.color = "darkred";
    } else {
        passwordCheckText.style.display = "block";
        passwordCheckText.innerHTML = passwordValue.length + " of 8";
        passwordCheckText.style.color = "green";
    }
    if (passwordValue.length == 0) {
        passwordCheckText.style.display = "none";
    }
});

// User Validation
btn.addEventListener("click", () => {
    let userNmaeValue = userName.value;
    let passwordValue = password.value;

    if (userNmaeValue.length < 12 || passwordValue.length < 8) {
        mainBox.style.display = "none";
        modal.style.display = "block";
        modalText.innerHTML = "Access denied ";
        modalText.style.color = "darkred";
    } else {
        mainBox.style.display = "none";
        modalText.innerHTML = "Access granted ";
        modal.style.display = "block";
        modalText.style.color = "green";
    }
    setTimeout(() => {
        mainBox.style.display = "block";
        modal.style.display = "none";
    }, 3000);
});
