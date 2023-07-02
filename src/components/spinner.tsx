import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
interface SpinnerProps {
  size?: number
}

const Spinner: FunctionComponent<SpinnerProps> = ({ size }) => {
  return <Icons.Loader size={size} className="animate-spin opacity-30" />
}

export default Spinner
