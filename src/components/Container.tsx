interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full mx-auto max-w-screen-2xl">{children}</div>
}
