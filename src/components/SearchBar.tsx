interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <input
      type="text"
      placeholder="Search the website"
      className="hidden w-full max-w-sm input input-bordered md:flex"
    />
  )
}
