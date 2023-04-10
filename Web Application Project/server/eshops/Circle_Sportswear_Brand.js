const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto(`https://shop.circlesportswear.com/collections/nouveautes`);
	const products = await page.evaluate(() => {
		let products = [];
		let elements = document.querySelectorAll('#product-grid > li');
		for (element of elements) {
			products.push({
				brand: "Circle_Sportswear",
				image: element.querySelector('#product-grid > li > div > div > div > div > div > img')?.src,
				title: element.querySelector('#product-grid > li > div > div > div.card__content > div.card__information > h3').textContent.trim(),
				price: element.querySelector('#product-grid > li > div > div > div.card__content > div.card__information > div.card-information > div > div > div.price__sale > span.price-item.price-item--sale.price-item--last > span').textContent.trim(),
				quality: element.querySelector('#product-grid > li > div > div > div.card__content > div.card__information > h4').textContent.trim()
			})
		}
		return products;
	});
	console.log(products);
	await browser.close();
})();
