import puppeteer from "puppeteer";

export async function webScrapingUtil() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://oxylabs.io/');
    // await browser.close();
};