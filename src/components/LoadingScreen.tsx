interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
}
