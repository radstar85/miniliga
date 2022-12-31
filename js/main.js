const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItem = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");

const handleNav = () => {
	nav.classList.toggle("nav--active");
	navBtnBars.classList.remove("black-bars-color");

	allNavItem.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});

	handleNavItemsANimation();
};

const handleNavItemsANimation = () => {
	let delayTime = 0;
	allNavItem.forEach((item) => {
		item.classList.toggle("nav-item-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

navBtn.addEventListener("click", handleNav);
