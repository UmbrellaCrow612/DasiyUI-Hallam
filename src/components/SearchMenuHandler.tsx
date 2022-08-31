import { BiSearchAlt2 } from 'react-icons/bi'

interface SearchMenuHandlerProps {}

export const SearchMenuHandler: React.FC<SearchMenuHandlerProps> = () => {
  return (
    <label
      htmlFor="my-modal-6"
      className="md:hidden btn modal-button "
      aria-label="Search Modal"
    >
      <BiSearchAlt2 />
    </label>
  )
}
