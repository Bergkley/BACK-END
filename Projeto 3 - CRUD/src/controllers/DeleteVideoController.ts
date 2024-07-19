import {Request, Response} from "express";
import { DeleteVideosService } from "../services/DeleteVideosService";


class DeleteVideoController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new DeleteVideosService();
        const result = await service.execute(id)

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}

export {DeleteVideoController}