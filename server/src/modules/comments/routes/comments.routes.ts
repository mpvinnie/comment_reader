import { Router } from "express";
import { CreateCommentController } from "../useCases/createComment/createCommentController";
import { ListCommentsController } from "../useCases/listComments/listCommentsController";

export const commentsRoutes = Router()

const createCommentController = new CreateCommentController()
const listCommentsController = new ListCommentsController()

commentsRoutes.post('/', createCommentController.handle)
commentsRoutes.get('/', listCommentsController.handle)