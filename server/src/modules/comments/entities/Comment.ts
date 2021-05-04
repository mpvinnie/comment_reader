import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date
}