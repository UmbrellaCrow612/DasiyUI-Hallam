interface SearchModalProps {}

export const SearchModal: React.FC<SearchModalProps> = () => {
  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle md:hidden"
      />
      <div className="modal modal-bottom sm:modal-middle md:hidden">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Search the website"
            className="w-full max-w-lg mx-auto input input-bordered"
          />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Cancel
            </label>
            <label htmlFor="my-modal-6" className="btn">
              Search
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
