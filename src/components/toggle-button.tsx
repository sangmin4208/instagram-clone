import { FunctionComponent, ReactNode } from 'react'
import { Button } from './ui/button'
interface ToggleButtonProps {
  toggled: boolean
  onToggle: (like: boolean) => void
  onIcon: ReactNode
  offIcon: ReactNode
}

const ToggleButton: FunctionComponent<ToggleButtonProps> = ({
  toggled,
  onToggle,
  onIcon,
  offIcon,
}) => {
  return (
    <Button
      onClick={() => {
        onToggle(!toggled)
      }}
      variant={'ghost'}
    >
      {toggled ? onIcon : offIcon}
    </Button>
  )
}

export default ToggleButton
