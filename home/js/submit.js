const apiAppointment = "https://behospital.onrender.com/appointment";
const apiSendMail = "https://behospital.onrender.com/mail"
const createSubmit = async (name,phone, age, userId, doctorId, date) => {
    try {
        const res = await fetch(apiAppointment, {
            method: "POST",
            body: JSON.stringify({
                name,
                phone, 
                age, 
                userId, 
                doctorId, 
                date,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            alert(
                "Đặt lịch với bác sĩ thành công. Thông tin sẽ được gửi về email của bạn!"
            );
            window.location.reload();
        } else {
            alert("Đặt lịch không thành công.");
        }
    } catch (error) {
        console.log(error);
    }
};

const sendMail = async (userId, doctorId, date, time, name) => {
    try {
        const res = await fetch(apiSendMail, {
            method: "POST",
            body: JSON.stringify({
                userId,
                doctorId, 
                date, time, 
                doctorId, 
                name
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            window.location.reload();
        } else {
            alert("Gửi mail không thành công.");
        }
    } catch (error) {
        console.log(error);
    }
};

const formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const loggedIn = localStorage.getItem("login");

    if (!loggedIn) {
        alert("Vui lòng đăng nhập để đặt lịch hẹn.");
        e.preventDefault();
        location.href = "../login/index.html";
    } else {
        const inputName = document.getElementById("inputName")
        const inputAge = document.getElementById("inputAge")
        const inputPhone = document.getElementById("inputPhone")
        const inputDate = document.getElementById("inputDate");
        const inputTime = document.getElementById("inputTime");

        const urlParams = new URLSearchParams(window.location.search);
        const doctorId = urlParams.get("id");

        const    name = inputName.value;
        const    age = Number(inputAge.value);
        const    phone= inputPhone.value;
        const   date= inputDate.value;
        const   time= inputTime.value;
        const userId = localStorage.getItem("id")+"";

        createSubmit(name,phone, age, userId, doctorId, date);
        sendMail(userId, doctorId, date, time, name);
    }
});


