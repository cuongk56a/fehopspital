const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get("id");

const apiDoctor = `https://behospital.onrender.com/doctor/${doctorId}`;

const container = document.querySelector("#myDiv");
const arrayImage = ['img/pf3.jpg','img/about-img.jpg', 'img/author1.jpg', 'img/author2.jpg', 'img/author3.jpg','img/mission-img.jpg']

const getDoctor = async () => {
    try {
        const response = await fetch(apiDoctor);
        const doctors = await response.json();
        const data = doctors.map((doctor) => {
            const random = Math.floor(Math.random() * arrayImage.length) 
            return `<div class="single-pf"><img src=${arrayImage[random]} alt="#" /><a href="./doctor.html?id=${doctor.id}" class="btn">Đặt lịch</a></div>`;
        });
        container.innerHTML = data.join(" ");
    } catch (error) {
        console.log(error);
    }
};

getDoctor();
