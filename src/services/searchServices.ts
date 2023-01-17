import { webScrapingUtil } from "../utils/webScraping";

export async function searchService(brand: string){
    return await webScrapingUtil(brand);
};