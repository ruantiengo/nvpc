import { Repo } from '../../../../pages'
import { GithubProject } from './GithubProject'
import styles from './styles.module.scss'
export type GithubProjectsAreaProps = {
  repos: Repo[]
}
export function GithubProjectsArea (props: GithubProjectsAreaProps) {
  return (
      <div className={styles.container}>
          {props.repos.map((element, index) => <GithubProject key={index} link={element.html_url} lastCommit={element.updated_at} title={element.name} animationDelay={index + 1} language={element.language}/>)}

      </div>
  )
}
