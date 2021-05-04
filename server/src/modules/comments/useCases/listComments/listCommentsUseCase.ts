import { inject, injectable } from "tsyringe";
import { Comment } from "../../entities/Comment";
import { ICommentsReposity } from "../../repositories/ICommentsRepositor";

@injectable()
export class ListCommentsUseCase {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsReposity
  ) {}

  async execute(): Promise<Comment[]> {
    const comments = await this.commentsRepository.findAll()

    return comments
  }
}