const apiDoctor = "https://behospital.onrender.com/doctor";

const getDoctor = async () => {
    try {
        const response = await fetch(apiDoctor);
        const doctors = await response.json();
        console.log(doctors);
        doctors.forEach((doctor) => {
            const doctorElement = document.createElement("a");
            doctorElement.href = `./doctor.html?id=${doctor.id}`;
            doctorElement.classList.add("btn");
            doctorElement.textContent;
            // document.getElementsById("myDiv").appendChild(doctorElement);
            document.getElementById("myDiv").appendChild(doctorElement);
        });
    } catch (error) {
        console.log(error);
    }
};

getDoctor();
