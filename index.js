document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(".hm-menu"); // دکمه منوی همبرگری
	const mobileMenu = document.querySelector(".mobile-menu"); // منوی موبایل
	const backOverlay = document.querySelector(".back"); // پس‌زمینه تاریک برای مودال

	// رویداد کلیک برای باز کردن منو
	menuButton.addEventListener("click", function () {
		mobileMenu.classList.toggle("d-block"); // نمایش یا مخفی کردن منو
		backOverlay.classList.toggle("d-block"); // نمایش یا مخفی کردن پس‌زمینه
		document.body.classList.toggle("overflow-hidden"); // جلوگیری از اسکرول در هنگام باز بودن منو
	});

	// بستن منو هنگام کلیک روی پس‌زمینه تاریک
	backOverlay.addEventListener("click", function () {
		mobileMenu.classList.remove("d-block");
		backOverlay.classList.remove("d-block");
		document.body.classList.remove("overflow-hidden");
	});
});

// language list

document.addEventListener("DOMContentLoaded", function () {
	const langbutton = document.querySelector(".language-selector");
	const langlist = document.querySelector(".language-dropdown");
	langbutton.addEventListener("click", function () {
		langlist.classList.toggle("d-block");
	});
});
