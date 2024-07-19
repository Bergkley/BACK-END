import {Request, Response} from "express";
import {GetAllCategoriesService} from "../services/GetAllCategoriesService";

class GetAllCategoriesController{
    async handle(request: Request, response: Response){
        const service = new GetAllCategoriesService()

       const allCategories = await service.execute()

        return response.json(allCategories)
    }
}

export {GetAllCategoriesController}