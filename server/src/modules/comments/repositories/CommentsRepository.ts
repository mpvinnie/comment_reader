import { getRepository, Repository } from "typeorm";
import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from "../entities/Comment";
import { ICommentsReposity } from "./ICommentsRepositor";

export class CommentsRepository implements ICommentsReposity {
  private ormRepository: Repository<Comment>

  constructor() {
    this.ormRepository = getRepository(Comment)
  }

  async create({ text }: ICreateCommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create({
      text
    })

    await this.ormRepository.save(comment)

    return comment
  }
}