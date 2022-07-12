import styles from './styles.module.scss'
type HeaderProps = {
    title: string
    imageUrl: string
}
export function Header (props: HeaderProps) {
  return (

      <div className={styles.header}>
          <img src={props.imageUrl} alt="Imagem perfil"></img>
          <h1>{props.title || 'ruantiengo'}</h1>
      </div>

  )
}
