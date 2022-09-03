import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
const applicant: NextPage = () => {
  return (
    <>
      <Head>
        <title>Applicant | Sheffield Hallam University</title>
        <meta
          name="description"
          content="The homepage for applicants that want to apply for a degree, apprenticeship and courses at sheffield hallam university"
        />
      </Head>
      <Container>
        <section className="h-[600px] px-4 flex gap-5 flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="text-primary">Studying</span> at Sheffield Hallam
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            You&apos;re making the right{' '}
            <span className="text-secondary">choice</span>
          </h2>
          <div className="btn-group">
            <button className="btn btn-primary">Courses</button>
            <button className="btn">Apply</button>
            <button className="btn">Portal</button>
          </div>
        </section>

        <section className="h-[600px] px-4 flex gap-5 flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="text-primary">Clearing</span> and{' '}
            <span className="text-primary">Open days</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            We&apos;re open for{' '}
            <span className="text-secondary">applications</span>
          </h2>
          <div className="btn-group">
            <button className="btn btn-primary">Find out more</button>
            <button className="btn">View open days</button>
          </div>
        </section>

        <section className="h-[600px] px-4 flex gap-5 flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="text-primary">Support channels</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Get help from
            <span className="text-secondary"> students and teachers</span>
          </h2>
          <div className="btn-group">
            <button className="btn btn-primary">Help</button>
            <button className="btn">Questions</button>
            <button className="btn">Support</button>
          </div>
        </section>
        <section className="h-[600px] px-4 flex gap-5 flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Student <span className="text-primary">life</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Hear from first ahd experience from our
            <span className="text-secondary"> amazing students</span>
          </h2>
          <div className="btn-group">
            <button className="btn btn-primary">More</button>
            <button className="btn">Support</button>
            <button className="btn">Blog</button>
          </div>
        </section>
        <section className="h-[600px] px-4 flex gap-5 flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Get in <span className="text-primary">touch</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Have a specific query? We are here to
            <span className="text-secondary">help</span>
          </h2>
          <div className="btn-group">
            <button className="btn btn-primary">Ask a question</button>
            <button className="btn">Chat to a student</button>
          </div>
        </section>
      </Container>
    </>
  )
}
export default applicant
