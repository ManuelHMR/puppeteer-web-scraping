import { webScrapingUtil } from "../utils/puppeteer";

export async function searchService(brand: string){
    return await webScrapingUtil(brand);
};