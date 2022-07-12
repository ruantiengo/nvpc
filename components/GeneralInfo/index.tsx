import { Repo } from '../../pages'
import { Header } from './header'
import { Main } from './mainText'
import { RankLanguages } from './rankLanguages'
import styles from './styles.module.scss'
type GeneralInfoProps = {
    title: string
    imageUrl: string
    numberRepos: number
    filterLanguages: string[]
    repos: Repo[]
}
export function GeneralInfo (props: GeneralInfoProps) {
  return (
      <div className={styles.container}>
          <Header title={props.title} imageUrl={props.imageUrl}/>
          <Main length={props.numberRepos}/>
          <RankLanguages filterLanguages={props.filterLanguages} repos={props.repos}/>
      </div>
  )
}
