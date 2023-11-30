const role = localStorage.getItem("role")
const id = localStorage.getItem("id")

const getButtonManage = () => {
    const container = document.getElementsByClassName('myUlLi')
    if(role == "doctor"){
        const data = '<li><a href="manage.html?id=${id}">Quản lí lịch</a></li>'
        container.innerHTML = data  
    }
};

getButtonManage();

