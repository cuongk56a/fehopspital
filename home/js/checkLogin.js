document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".get-quote a.btn");

    const login = localStorage.getItem("login");
    if (login) {
        loginButton.textContent = "Đăng xuất";
        loginButton.href = "#";
        loginButton.addEventListener("click", () => {
            localStorage.removeItem("login");
            window.location.reload();
        });
    } else {
        loginButton.textContent = "Đăng nhập";
        loginButton.href = "../login/index.html";
    }
});
