import { Router } from "express";
import { CreateCommentController } from "../useCases/createComment/createCommentController";

export const commentsRoutes = Router()

const createCommentController = new CreateCommentController()

commentsRoutes.post('/', createCommentController.handle)