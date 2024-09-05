import {Category} from "../entities/Category";
import {getRepository} from "typeorm";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService{
    async execute({name, description}:CategoryRequest): Promise<Category | Error>{
        const repo = getRepository(Category);

        if (await repo.findOne({name})){
            return new Error("Category already Exists!");
        }

        const category = repo.create({
            name,
            description
        })

        await repo.save(category);

        return category
    }
}