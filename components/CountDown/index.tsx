import { useEffect, useState } from 'react'

type CountDownProps = {
    numberToCount: number
}
export function CountDown ({ numberToCount }: CountDownProps) {
  const [state, setState] = useState<number>(0)
  useEffect(() => {
    setTimeout(() => {
      setState(state + 1)
      if (state >= numberToCount) {
        return setState(numberToCount)
      }
    }, 75)
  }, [state])
  return (
      <div>
          {state}
      </div>
  )
}
