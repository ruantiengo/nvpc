import { CountDown } from '../CountDown'
import styles from './styles.module.scss'

export type LanguageBoxProps = {
    title: string
    number: number
}
export function LanguageBox (props : LanguageBoxProps) {
  return (
      <div className={styles.languageBox}>
          <h3>{props.title}</h3>
          <span><CountDown numberToCount={props.number}/></span>
      </div>
  )
}
