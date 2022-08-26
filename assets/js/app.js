	
	let mMenuClose = document.querySelector(".m-menuClose");
	let mMenu = document.querySelector(".mobile-menu");
	let mMenuOpener = document.querySelector(".m-MenuOpen span");
	let body = document.querySelector('body');

	mMenuClose.addEventListener("click", function(){
		mMenu.classList.remove("active")
	});

	mMenuOpener.addEventListener("click", function(){
		mMenu.classList.add("active")
	})

	mMenu.addEventListener("click", function(){
		mMenu.classList.add("active")
	},true)

	body.addEventListener("click", function(){
		mMenu.classList.remove("active")

	}, true);










	// api

	// const API_URL = "https://api.exchangeratesapi.io/latest";

	// let html = '';

	// async function currency(){
	// 	const res = await fetch(API_URL);
	// 	console.log(res);
	// 	const data = await res.json();

	// 	console.log(data)

	// }

	// currency();

	const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    const entries = Object.entries(data);
    console.log(entries);

  });