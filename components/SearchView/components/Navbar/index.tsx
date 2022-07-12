import { Dispatch, SetStateAction } from 'react'

import styles from './styles.module.scss'
export type NavbarProps = {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  transaction: any
  filter: any
}
export function Navbar (props: NavbarProps) {
  return (
      <div className={styles.container} >
          <img src="/logo.svg" alt="Logo NVPC"/>

          <input placeholder='Pesquise por nome' value={props.query} onChange={(e) => {
            props.setQuery(e.target.value)

            props.transaction(() => {
              props.filter(e)
            })
          }}/>

      </div>
  )
}
