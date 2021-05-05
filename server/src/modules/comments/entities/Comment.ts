import { Expose } from "class-transformer"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  text: string

  @Column()
  audio: string

  @CreateDateColumn()
  created_at: Date

  @Expose({ name: 'audio_url'})
  getAudioUrl(): string {
    return `http://localhost:3333/audios/${this.audio}.wav`
  }
}