import { container } from "tsyringe";
import { CommentsRepository } from "../modules/comments/repositories/CommentsRepository";
import { ICommentsReposity } from "../modules/comments/repositories/ICommentsRepositor";

container.registerSingleton<ICommentsReposity>('CommentsRepository', CommentsRepository)