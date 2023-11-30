const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get("id");

const apiDoctor = `https://behospital.onrender.com/doctor/${doctorId}`;
const container = document.querySelector("#myDoctor");
const getDoctor = async () => {
    try {
        const response = await fetch(apiDoctor);
        const doctor = await response.json();
        const data = `<h2><b>BS. </b>${doctor.name}</h2><p><b>Ngành: </b>${doctor.major}</p><p><b>Chức vụ: </b>${doctor.position}</p><p><b>Học vấn:</b> ${doctor.education}
        </p><p><b>Kinh nghiệm: </b>${doctor.work_experience}</p><p><b>Tuổi: </b>${doctor.age}</p>`
        container.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
};

getDoctor();