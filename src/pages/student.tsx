import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
const student: NextPage = () => {
  return (
    <>
      <Head>
        <title>Student | Sheffield Hallam University</title>
      </Head>
      <Container>
        <section className="h-[600px] gap-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="text-primary">Student&apos;s</span> welcome
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            How you <span className="text-secondary">feeling...</span>
          </h2>
          {/* Icon flipper */}
          <label className="swap swap-flip text-5xl">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
          {/* Icon flipper ends*/}
          <div className="btn-group">
            <button className="btn btn-active">MyHallam</button>
            <button className="btn">Explore</button>
            <button className="btn">Support</button>
          </div>
        </section>
        <section className="h-[600px] gap-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Get help with an <span className="text-primary">issue</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Find a support <span className="text-secondary">service</span>
          </h2>
          <div className="btn-group">
            <button className="btn">Find a service</button>
            <button className="btn btn-secondary">Hallam Help</button>
          </div>
        </section>
      </Container>
    </>
  )
}
export default student
