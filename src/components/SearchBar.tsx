interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="hidden md:form-control ">
      <label className="input-group">
        <input
          type="text"
          placeholder="Search the website"
          className="input input-bordered"
        />
        <label className="btn">⌘ K</label>
      </label>
    </div>
  )
}
