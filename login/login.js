const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

const apiSignUp = "https://behospital.onrender.com/user/signup";
const apiSignin = "https://behospital.onrender.com/user/signin";

const createUser = async (email, password, api, navigate = false) => {
    try {
        const res = await fetch(api, {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (!navigate) {
            alert("Tạo tài khoản thành công");
            window.location.reload();
        } else {
            localStorage.setItem("login", data.access_token);
            location.href = "/home/index.html";
        }
    } catch (error) {
        console.log(error);
    }
};

const form = document.querySelector(".form-data");
const formLogin = document.querySelector(".form-login");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");

    const valueInputEmail = inputEmail.value;
    const valueInputPassword = inputPassword.value;

    if (valueInputEmail.trim() === "" || valueInputPassword.trim() === "") {
        alert("Vui lòng nhập đầy đủ email hoặc password");
        return;
    }
    createUser(valueInputEmail, valueInputPassword, apiSignUp);
});

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById("email-login");
    const inputPassword = document.getElementById("password-login");

    const valueInputEmail = inputEmail.value;
    const valueInputPassword = inputPassword.value;

    // if (valueInputEmail.trim() === "" || valueInputPassword.trim() === "") {
    //     alert("Email hoặc password không chính xác");
    //     return;
    // }
    createUser(valueInputEmail, valueInputPassword, apiSignin, true);
});
