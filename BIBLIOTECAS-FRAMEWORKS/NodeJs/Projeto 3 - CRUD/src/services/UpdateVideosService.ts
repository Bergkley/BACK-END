import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Videos } from "../entities/Video";

type VideoUpdateRequest = {
    id: string;
    name: string;
    description: string;
    duration: number;
}


export class UpdateVideoService {
    async execute({id, name, description, duration}: VideoUpdateRequest) {
        const repo = getRepository(Videos)

        const videos= await repo.findOne(id)

        if(!videos){
            return new Error("videos does not exists")
        }

        videos.name = name ? name : videos.name;
        videos.description = description? description : videos.description;
        videos.duration = duration? duration : videos.duration;

        await repo.save(videos);
    }
}