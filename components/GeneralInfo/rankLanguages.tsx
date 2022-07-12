import { Question } from 'phosphor-react'

import { Repo } from '../../pages'
import { LanguageBox } from './languageBox'
import styles from './styles.module.scss'
type RankLanguagesProps = {
    filterLanguages: string[]
    repos: Repo[]
}
export function RankLanguages (props: RankLanguagesProps) {
  function setNumberAppears (language: string) {
    const numReps = props.repos.filter(repo => repo.language === language)
    return numReps.length
  }
  return (
      <div className={styles.languageContainer}>
          <div className={styles.languageTitle}>
              <p>Linguagens</p>
              <Question width={24} />
          </div>
          <div className={styles.languageContent}>
              {props.filterLanguages.slice(0, 4).map((element, index) => {
                return <LanguageBox key={index} title={element} number={setNumberAppears(element)}/>
              })}

          </div>
      </div>

  )
}
