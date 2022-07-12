/* eslint-disable no-unused-vars */
import { ChangeEvent, useState, useTransition } from 'react'
import { Repo } from '../../pages'
import { Order } from './components/OptionsMenu'
import { GithubProjectsArea } from './components/GithubProjectsArea'
import { Navbar } from './components/Navbar'

import styles from './styles.module.scss'
export type SearchViewProps = {
  userRepos: Repo[]
  filterLanguages: string[]
}
export function SearchView (props: SearchViewProps) {
  const [repos, setRepos] = useState(props.userRepos)
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = props.userRepos.filter((repo) => {
        return repo.name.toLowerCase().startsWith(keyword.toLowerCase())
        // Use the toLowerCase() method to make it case-insensitive
      })

      setRepos(results)
    } else {
      setRepos(props.userRepos)
      // If the text field is empty, show all users
    }
  }

  return (
      <div className={styles.container}>
          <Navbar query={query} setQuery={setQuery} transaction={startTransition} filter={filter} />

          <Order data={props.userRepos} setData={setRepos} filterLanguages={props.filterLanguages} />

          <GithubProjectsArea repos={repos}/>
      </div>
  )
}
