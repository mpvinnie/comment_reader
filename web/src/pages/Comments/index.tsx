import styles from './styles.module.scss'

export function Comments() {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h3>Comentário</h3>
        <textarea placeholder="Insira um commentário..." />
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <section className={styles.commentsContainer}>
        <h3>Comentários</h3>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem nam ut cum dolorum harum? Eveniet illo neque enim
            placeat blanditiis perferendis laudantium consectetur?
          </p>
          <button type="button">
            Ouvir
          </button>
        </div>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem nam ut cum dolorum harum? Eveniet illo neque enim
            placeat blanditiis perferendis laudantium consectetur?
          </p>
          <button type="button">
            Ouvir
          </button>
        </div>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem nam ut cum dolorum harum? Eveniet illo neque enim
            placeat blanditiis perferendis laudantium consectetur?
          </p>
          <button type="button">
            Ouvir
          </button>
        </div>
      </section>
    </div>
  )
}