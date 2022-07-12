import { CountDown } from '../CountDown'
import styles from './styles.module.scss'
type MainProps = {
    length: number
}
export function Main (props: MainProps) {
  return (

      <div className={styles.main}>
          <p>Número total de projetos</p>
          <div className={styles.number}><CountDown numberToCount={props.length}/></div>
      </div>

  )
}
