const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto(`https://www.montlimart.com/72-nouveautes`);
	const products = await page.evaluate(() => {
		let products = [];
		let elements = document.querySelectorAll('#js-product-list > div.products-list.row > div');
		for (element of elements) {
			products.push({
				brand: "Montlimart",
				image: element.querySelector('#js-product-list > div > div > article > div > a > img')?.getAttribute("data-src"),
				title: element.querySelector('#js-product-list > div > div > article > div > h3')?.textContent.trim(),
				price: parseFloat(element.querySelector('#js-product-list > div > div > article > div > div > span')?.textContent),
				color: element.querySelector('#js-product-list > div > div > article > div > div').textContent.trim()
			})
		}
		return products;
	});
	console.log(products);
	await browser.close();
})();
