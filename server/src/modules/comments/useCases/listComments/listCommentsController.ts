import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCommentsUseCase } from "./listCommentsUseCase";

export class ListCommentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listComments = container.resolve(ListCommentsUseCase)

    const comments = await listComments.execute()

    return response.json(classToClass(comments))
  }
}