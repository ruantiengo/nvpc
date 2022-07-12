import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Repo } from '../../../../pages'
import { Filter } from './filter'
import styles from './styles.module.scss'
type OrderProps = {
    setData: Dispatch<SetStateAction<Repo[]>>
    filterLanguages: string[]
    data: Repo[]
}
export function Order (props: OrderProps) {
  const [order, setOrder] = useState('')

  const orderData = (date1: string, date2: string) => {
    const ano1 = date1.slice(0, 4)
    const ano2 = date2.slice(0, 4)

    const mes1 = date1.slice(5, 7)
    const mes2 = date2.slice(5, 7)

    const dia1 = date1.slice(8, 10)
    const dia2 = date2.slice(8, 10)

    if (ano1 < ano2) return -1
    if (ano1 > ano2) return 1
    if (ano1 === ano2 && mes1 < mes2) return -1
    if (ano1 === ano2 && mes1 > mes2) return 1
    if (ano1 === ano2 && mes1 === mes2 && dia1 < dia2) return -1
    if (ano1 === ano2 && mes1 === mes2 && dia1 > dia2) return 1
    return 0
  }
  useEffect(() => {
    if (order === 'alphabetics') {
      const orderedData = props.data.sort((a, b) => {
        const a1 = a.name.toLowerCase()
        const b1 = b.name.toLocaleLowerCase()

        if (a1 < b1) return -1
        if (a1 > b1) return 1
        return 0
      })

      props.setData([...orderedData])
    }
    if (order === 'last-commit') {
      const orderedData = props.data.sort((a, b) => orderData(a.updated_at, b.updated_at))
      props.setData([])
      props.setData([...orderedData])
    }
  }, [order])
  return (
      <>
          <div className={styles.container}>
              <Filter languages={props.filterLanguages} data={props.data} setData={props.setData}/>
              <select defaultValue="none" onChange={e => {
                setOrder(e.target.value)
              }}>
                  <option disabled value="none">
                      Ordenar por
                  </option>
                  <option value={'last-commit'}>
                      Data do ultimo commit
                  </option>
                  <option value={'alphabetics'}>
                      Ordem alfabetica
                  </option>
              </select>

          </div>
          <div className={styles.divider}></div>
      </>
  )
}
