import { Router } from "express";

import { commentsRoutes } from '../modules/comments/routes/comments.routes'

export const routes = Router()

routes.use('/comments', commentsRoutes)