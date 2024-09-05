import { getRepository } from "typeorm";
import { Videos } from "../entities/Video";

export class DeleteVideosService {
    async execute(id: string){
        const repo = getRepository(Videos);

        if (!await repo.findOne(id)){
            return new Error("Video does not exists")
        }
        await repo.delete(id)
    }
}