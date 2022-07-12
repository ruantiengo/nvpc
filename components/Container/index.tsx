import styles from './styles.module.scss'
export type ContainerProps = {
    children: any
}
export function Container (props: ContainerProps) {
  return (
      <div className={styles.container}>
          {props.children}
      </div>
  )
}
