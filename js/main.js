let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body = document.querySelector('body');

if (isMobile.any()) {
	body.classList.add('touch');

	let arrow = document.querySelectorAll('.nav-arrow');
	let subMenu = document.querySelector('sub-nav__list');

	arrow.addEventListener('click', function () {
		subMenu.classList.toggle('open');
		arrow.classList.toggle('active');
	})
} else {
	body.classList.add('mouse');
}
