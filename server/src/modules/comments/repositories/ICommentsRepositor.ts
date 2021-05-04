import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from '../entities/Comment'

export interface ICommentsReposity {
  create(data: ICreateCommentDTO): Promise<Comment>
  findAll(): Promise<Comment[]>
}