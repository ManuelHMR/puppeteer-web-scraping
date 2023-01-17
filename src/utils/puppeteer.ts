import puppeteer from "puppeteer";

export async function webScrapingUtil(brand: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
    await page.waitForSelector(".thumbnail");
    const linksWithNulls = await page.$$eval('h4 > a', (element, brand) => element.map((a) => {
        if(a.textContent !== null && a.textContent.includes(brand)) return a.href
    }), brand);
    const links = linksWithNulls.filter(link=>link!== null);
    await browser.close();
    return links;
};