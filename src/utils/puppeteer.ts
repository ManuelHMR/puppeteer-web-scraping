import { title } from "process";
import puppeteer from "puppeteer";

const site : string = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'

export async function webScrapingUtil(brand: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site);
    await page.waitForSelector(".thumbnail");
    const linksWithNulls = await page.$$eval('h4 > a', (element, brand) => element.map((a) => {
        if(a.textContent !== null && a.textContent.includes(brand)) return a.href
    }), brand);
    const links = linksWithNulls.filter(link=>link!== null);
    const result : Result[] = [];
    for(let index = 0; index < links.length; index++) {
        await page.goto(links[index] as string, {timeout: 0});
        console.log(`Scraping product: ${index+1}/${links.length}`)
        await page.waitForSelector("h4");
        const h4 = await page.$$eval(".caption > h4" , h4 => h4.map(element => element.innerText))
        const title = h4[1];
        const price = await page.$eval(".price", price => price.textContent);
        const description = await page.$eval(".description", description => description.textContent)
        const reviews = await page.$eval(".ratings > p", rating=> rating.innerText)
        const unavailable_hdd = await page.$$eval(".disabled", button => button.map(element => element.textContent));
        const allHdd = await page.$$eval(".btn", button => button.map(element => element.textContent));
        const available_hdd = allHdd.filter(hdd => !unavailable_hdd.includes(hdd))
        const data = {
            title,
            price,
            description,
            reviews, 
            available_hdd,
            unavailable_hdd
        }
        console.log(data);
        result.push(data)
    }
    await browser.close();
    return result.sort((a, b) => parseInt(a.price as string) - parseInt(b.price as string));
};

interface Result{
    title: string | null,
    price: string | null,
    description: string | null, 
    reviews: string | null,
    available_hdd: (string | null)[],
    unavailable_hdd: (string | null)[]
}
