const role = localStorage.getItem("role");
const login = localStorage.getItem("login");
const id = localStorage.getItem("id");

const getButtonManage = () => {
	const container = document.querySelector(".myUlLi");
	if (role === "doctor" && login) {
		const link = document.createElement("a");
		link.href = `manage.html?id=${id}`;
		link.textContent = "Quản lí lịch";
		const listItem = document.createElement("li");
		listItem.appendChild(link);
		container.appendChild(listItem);
	}
};

getButtonManage();