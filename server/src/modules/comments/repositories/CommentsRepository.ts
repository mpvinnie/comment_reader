import { getRepository, Repository } from "typeorm";
import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from "../entities/Comment";
import { ICommentsReposity } from "./ICommentsRepositor";

export class CommentsRepository implements ICommentsReposity {
  private ormRepository: Repository<Comment>

  constructor() {
    this.ormRepository = getRepository(Comment)
  }

  async create({ text, audio }: ICreateCommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create({
      text,
      audio
    })

    await this.ormRepository.save(comment)

    return comment
  }

  async findAll(): Promise<Comment[]> {
    return await this.ormRepository.find({
      order: { created_at: 'DESC' }
    })
  }
}