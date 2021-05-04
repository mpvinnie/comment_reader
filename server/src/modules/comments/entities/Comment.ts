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
}