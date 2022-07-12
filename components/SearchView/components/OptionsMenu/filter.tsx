import { Dispatch, SetStateAction } from 'react'
import { Repo } from '../../../../pages'
import styles from './styles.module.scss'
type FilterProps = {
  languages: string[]
  data: Repo[]
  setData: Dispatch<SetStateAction<Repo[]>>
}
export function Filter (props: FilterProps) {
  return (
      <span className={styles.filterContainer} >
          {props.languages.map((language, index) => <ButtonFilter key={index} name={language} data={props.data} setData={props.setData}/>)}
          <ButtonFilter data={props.data} name="Todos" setData={props.setData}/>
      </span>
  )
}
type ButtonFilterProps = {
  name: string
  data: Repo[]
  setData: Dispatch<SetStateAction<Repo[]>>
}

export function ButtonFilter (props: ButtonFilterProps) {
  return (
      <button onClick={() => {
        if (props.name === 'Todos') return props.setData(props.data)
        const filter = props.data.filter(repo => repo.language === props.name)
        props.setData(filter)
      }}>
          {props.name}
      </button>
  )
}
