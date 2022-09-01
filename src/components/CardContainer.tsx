interface CardContainerProps {
  children: React.ReactNode
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center gap-5 px-4 justify-evenly w-full">
      {children}
    </div>
  )
}
