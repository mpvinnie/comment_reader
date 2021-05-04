import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type Comment = {
  id: string
  text: string
}

export function Comments() {
  const [comment, setComment] = useState<string>()
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('/comments')
      setComments(response.data)
    }
    loadComments()
  }, [])

  const handleSubmit = useCallback( async (event) => {
    event.preventDefault()
    
    const response = await api.post('/comments', {
      text: comment
    })

    setComments(state => [...state, response.data])
  }, [comment])

  return (
    <div className={styles.container}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <h3>Comentário</h3>
        <textarea
          placeholder="Insira um comentário..."
          value={comment}
          onChange={e => setComment(e.target.value) }
        />
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <section className={styles.commentsContainer}>
        <h3>Comentários</h3>
        {comments.map(comment => (
          <div key={comment.id}>
          <p>{comment.text}
          </p>
          <button type="button">
            Ouvir
          </button>
        </div>
        ))}
      </section>
    </div>
  )
}