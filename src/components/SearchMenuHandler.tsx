import { BiSearchAlt2 } from 'react-icons/bi'

interface SearchMenuHandlerProps {}

export const SearchMenuHandler: React.FC<SearchMenuHandlerProps> = () => {
  return (
    <button className="btn md:hidden" aria-label='Search Menu'>
      <BiSearchAlt2 />
    </button>
  )
}
