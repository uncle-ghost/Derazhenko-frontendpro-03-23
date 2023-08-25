const catalog = [
	{
		id: '1',
		img: 'https://img.ktc.ua/img/base/1_295/4/444234.jpg',
		name: 'Батарея універсальна PowerX Q500 30000mAh White',
		price: 1199,
	},
	{
		id: '2',
		img: 'https://img.ktc.ua/img/base/1_295/1/442751.jpg',
		name: 'Батарея універсальна ExtraLink EPB-114 50000mAh',
		price: 1399,
	},
	{
		id: '3',
		img: 'https://img.ktc.ua/img/base/1_295/4/359764.jpg',
		name: 'Батарея універсальна Apple MagSafe Battery Pack',
		price: 4299,
	},
];

let productsWrapper = document.querySelector('.products');
let products

products = catalog.map((item, id) => {
	return`
		<div class="product">
			<img src="${item.img}" alt="">
			<h3 class="name">${item.name}</h3>
			<p class="price">${item.price} грн</p>
			<button class="buy" onclick="addProduct(this, '${id}')">Купити</button>
		</div>
	`
}).join('');
productsWrapper.innerHTML = products

let list = [];

function addProduct(el, id) {
	list.push(id)
	localStorage.setItem('catalog', JSON.stringify(list))
}

let order = document.querySelector('.order')
let information = document.querySelector('.information')

order.addEventListener('click', function() {
	productsWrapper.classList.add('hidden')
	
	let addedProducts = JSON.parse(localStorage.getItem('catalog'))
	orderProducts = addedProducts.map((item, id) => {
		return`
			<div class="product">
				<img src="${catalog[item].img}" alt="">
				<h3 class="name">${catalog[item].name}</h3>
				<p class="price">${catalog[item].price} грн</p>
				<button class="buy" onclick="removeProduct(this, '${id}')">Видалити</button>
			</div>
		`
	}).join('');

	information.innerHTML = orderProducts
})

function removeProduct(item, id) {
	list.splice(id, 1);
	localStorage.setItem('catalog', JSON.stringify(list))

	let addedProducts = JSON.parse(localStorage.getItem('catalog'))
	orderProducts = addedProducts.map((item, id) => {
		return`
			<div class="product">
				<img src="${catalog[item].img}" alt="">
				<h3 class="name">${catalog[item].name}</h3>
				<p class="price">${catalog[item].price} грн</p>
				<button class="buy" onclick="removeProduct(this, '${id}')">Видалити</button>
			</div>
		`
	}).join('');

	information.innerHTML = orderProducts
}