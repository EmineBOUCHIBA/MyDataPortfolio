const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto(`https://www.dedicatedbrand.com/en/men/news`);
	const products = await page.evaluate(() => {
		let products = [];
		let elements = document.querySelectorAll('#filterItems > div');
		for (element of elements) {
			products.push({
				brand : "dedicated",
				image: element.querySelector("#filterItems > div > a:nth-child(2) > div > img:nth-child(1)").getAttribute('data-src'),
				title: element.querySelector('#filterItems > div > a > div > span.productList-title')?.textContent.trim(),
				price: parseFloat(element.querySelector('#filterItems > div > a > div > div.productList-price')?.textContent.trim()),
				quality: element.querySelector('#filterItems > div > a > span')?.textContent.trim()
			})
		}
		return products;
	});
	console.log(products);
	await browser.close();
})();
