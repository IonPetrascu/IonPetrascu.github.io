(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if(window.pageYOffset > 50){
		header.classList.add('header__active');	
		} else{
			header.classList.remove('header__active');	
		}
	};
}());

//Burger handler start //
(function () {
	const burgerItem = document.querySelector('.burger');//Dam denumire burgerItem la atributul .burger schimbam denumirea ca sa putem lucra in java script//
	const menu = document.querySelector('.header-nav');
	const menuCloseItem = document.querySelector ('.header__nav-close');
	burgerItem.addEventListener('click',() =>{//la click pe burgerItem(.burger) adaugam cu ajutoru (.add) un alt style//
		menu.classList.add('header-nav-active');
	});
	menuCloseItem.addEventListener ('click',() =>{
		menu.classList.remove('header-nav-active');//aici pe click scoate acest style ca sa dispara //
		});
}());
//Burger handler end//