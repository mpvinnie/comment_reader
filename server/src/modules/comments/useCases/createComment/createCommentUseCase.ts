import { inject, injectable } from "tsyringe";
import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";
import { ICommentsReposity } from "../../repositories/ICommentsRepositor";
import { Comment } from '../../entities/Comment'

@injectable()
export class CreateCommentUseCase {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsReposity
  ) {}

  async execute({ text }: ICreateCommentDTO): Promise<Comment> {
    const comment = await this.commentsRepository.create({
      text
    })

    return comment
  }
}