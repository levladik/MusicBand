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

	let menu = document.querySelector('.nav__item-more');

	menu.addEventListener('click', function (event) {
		event.preventDefault();
		menu.classList.toggle('open');
	});
} else {
	body.classList.add('mouse');
}

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelectorAll('.nav__item');
	burgerItem.addEventListener('click', () => {
		for (let i = 0; i < menu.length; i++) {
			menu[i].classList.toggle('nav__item_active');
		}
	})

	for (let i = 0; i < menu.length; i++) {
		menu[i].addEventListener('click', () => {
		for (let i = 0; i < menu.length; i++) {
			menu[i].classList.remove('nav__item_active');
		}
	})
	}
}());
