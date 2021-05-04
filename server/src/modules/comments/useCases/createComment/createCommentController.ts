import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCommentUseCase } from "./createCommentUseCase";

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body

    const createComment = container.resolve(CreateCommentUseCase)

    const comment = await createComment.execute({
      text
    })

    return response.status(201).json(comment)
  }
}