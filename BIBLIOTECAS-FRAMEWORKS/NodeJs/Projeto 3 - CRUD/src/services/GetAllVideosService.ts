import { getRepository } from "typeorm";
import { Videos } from "../entities/Video";

export class GetAllVideosService {
    async execute() {
        const repo = getRepository(Videos);

        const video = await repo.find({relations:["category"]});

        if(!video){
            return new Error("Video does not exists")
        }
        
        return video;
    }
}