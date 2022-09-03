import type { NextPage } from 'next'
import Head from 'next/head'
const staff: NextPage = () => {
  return (
    <>
      <Head>
        <title>staff</title>
      </Head>
      <section className="h-[600px] gap-5 flex items-center justify-center text-center flex-col px-4">
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          <span className="text-primary">Staff</span> welcome
        </h1>
        <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
          How you <span className="text-secondary">feeling...</span>
        </h2>
        {/* Icon flipper */}
        <label className="text-5xl swap swap-flip">
          {/* <!-- this hidden checkbox controls the state --> */}
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
        {/* Icon flipper ends*/}

        {/* Mobile */}
        <div className="btn-group-vertical btn-group">
          <button className="btn btn-primary">Student Board</button>
          <button className="btn">Staff board</button>
          <button className="btn">Teams</button>
          <button className="btn">Support</button>
        </div>
      </section>
    </>
  )
}
export default staff
