const container = document.querySelector("#myUlLi");

const role = localStorage.getItem("role")
const id = localStorage.getItem("id")
const data = ''
const getButtonManage = async () => {
    try {
        if(role == "doctor"){
            data = '<li><a href="manage.html?id=${id}">Quản lí lịch</a></li>'
        }
        container.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
};

getButtonManage();

