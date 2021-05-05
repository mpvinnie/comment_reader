import { useCallback, useEffect, useRef, useState } from 'react'
import ReactLoading from 'react-loading'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type Comment = {
  id: string
  text: string
  audio_url: string
}

export function Comments() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    const response = await api.post('/comments', {
      text: comment
    })

    setComments(state => [...state, response.data])
    setIsLoading(false)
    setComment('')
    event.target.value = ''
  }, [comment])

  const handlePlayAudio = useCallback(() => {
    audioRef.current?.play()
  }, [])

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
        <button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ReactLoading
              type="spinningBubbles"
              height={32}
              width={32}
            />
          ) : 'Cadastrar'}
        </button>
      </form>

      <section className={styles.commentsContainer}>
        <h3>Comentários</h3>
        {comments.map(comment => (
          <div key={comment.id}>
          <audio src={comment.audio_url} ref={audioRef} />
          <p>{comment.text}
          </p>
          <button
            onClick={handlePlayAudio}
            type="button"
          >
            Ouvir
          </button>
        </div>
        ))}
      </section>
    </div>
  )
}