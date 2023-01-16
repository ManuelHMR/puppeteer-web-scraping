import { Request, Response } from "express";
import { searchService } from "../services/searchServices";

export async function searchController(req: Request,res: Response) {
    const { brand } = req.params;
    const result = await searchService(brand);
    return res.send(result);
};