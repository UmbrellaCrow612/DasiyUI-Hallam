interface SearchModalProps {}

export const SearchModal: React.FC<SearchModalProps> = () => {
  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" className="modal-toggle md:hidden" />
      <div className="modal md:hidden">
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
