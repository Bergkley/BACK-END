import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {

    async execute() {

        const repo = getRepository(Category);

        const categories = await repo.find();

        return categories
    }
} 