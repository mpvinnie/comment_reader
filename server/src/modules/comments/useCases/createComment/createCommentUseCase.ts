import fs from 'fs'
import { v4 as uuid } from 'uuid'
import { Readable } from 'stream'
import TextToSpeechV1 from  'ibm-watson/text-to-speech/v1'
import { IamAuthenticator } from 'ibm-watson/auth'
import { inject, injectable } from "tsyringe";
import { ICommentsReposity } from "../../repositories/ICommentsRepositor";
import { Comment } from '../../entities/Comment'

interface IRequest {
  text: string
}

async function createSpeechText(text: string): Promise<string> {
  const audioname = uuid()
  
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: `${process.env.TEXT_TO_SPEECH_API_KEY}`,
    }),
    serviceUrl: process.env.TEXT_TO_SPEECH_URL,
  });

  await textToSpeech.synthesize({
    text,
    voice: 'pt-BR_IsabelaVoice',
    accept: 'audio/wav',
  }).then(response => {
    const audio = response.result as Readable
    return textToSpeech.repairWavHeaderStream(audio)
  }).then(repairedFile => {
    return fs.writeFileSync(`tmp/${audioname}.wav`, repairedFile)
  })
  .catch(err => console.log(err))

  return audioname
}

@injectable()
export class CreateCommentUseCase {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsReposity
  ) {}

  async execute({ text }: IRequest): Promise<Comment> {
    const audioname = await createSpeechText(text)

    const comment = await this.commentsRepository.create({
      text,
      audio: audioname
    })

    return comment
  }
}