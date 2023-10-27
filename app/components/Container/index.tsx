import { FC, PropsWithChildren } from 'react'

type Container = {
  className?: string;
}

const Container: FC<PropsWithChildren<Container>> = ({ children, className }) => (
  <div className={`container px-4 mx-auto ${className}`}>
    {children}
  </div>
)

export default Container;
