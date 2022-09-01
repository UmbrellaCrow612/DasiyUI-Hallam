interface SubHeaderProps {}

export const SubHeader: React.FC<SubHeaderProps> = () => {
  return (
    <div className="justify-center hidden mx-auto max-w-screen-2xl md:navbar">
      <div className="btn-group">
        <button className="btn">Study here</button>
        <button className="btn">International</button>
        <button className="btn">Business</button>
        <button className="btn">Research</button>
        <button className="btn">Alumni</button>
        <button className="btn">Visit us</button>
        <button className="btn">About us</button>
      </div>
    </div>
  )
}