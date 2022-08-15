import { Button, Icon } from "react-materialize"


interface FloatButtonProps {
  color: string,
  icon: string,
}

export function FloatButton({color, icon}: FloatButtonProps) {
  const iconComponent = <Icon>{icon}</Icon>

  return (
    <Button
      className={color}
      fab={{
        direction: 'left',
        hoverEnabled: false
      }}
      floating
      large
      node="button"
      icon={iconComponent}
    ></Button>
  )
}
