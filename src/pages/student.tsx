import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components/Card'
import { CardContainer } from '../components/CardContainer'
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
        {/* Popular */}
        <section className="gap-5 h-[600px] mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Most <span className="text-primary">popular...</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Discover what all the <span className="text-primary">fuss</span> is
            about
          </h2>
          <div className="btn-group">
            <button className="btn">Today</button>
            <button className="btn">Week</button>
            <button className="btn">All time</button>
          </div>
          <h3 className="text-2xl font-extrabold leading-tight md:text-3xl text-secondary">
            Find out latest news, story&apos;s and article&apos;s from teachers
            and student&apos;s now!
          </h3>
        </section>
        {/* Help in Emergency*/}
        <section className="gap-5 h-[600px] mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Help in an
            <span className="text-primary"> emergency</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Sheffield Hallam in quick to act
          </h2>
          <div className="btn-group">
            <button className="btn">Campus security</button>
            <button className="btn">Report a incident</button>
            <button className="btn btn-primary">More...</button>
          </div>
          <h3 className="text-2xl font-extrabold leading-tight md:text-3xl text-secondary">
            You can trust us!
          </h3>
        </section>
        {/* Popular queries*/}
        <section className="gap-5 h-[600px] mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Popular
            <span className="text-primary"> queries</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Find out what everyone is asking
          </h2>
          <div className="btn-group">
            <button className="btn">Handbook</button>
            <button className="btn">calendar</button>
            <button className="btn btn-primary">More...</button>
          </div>
          <h3 className="text-2xl font-extrabold leading-tight md:text-3xl text-secondary">
            Find popular questions, topics and information
          </h3>
        </section>

        {/* Student voice */}
        <section className="gap-5 h-[600px] mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Student
            <span className="text-primary"> voice</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Bring your voice to our halls
          </h2>
          <div className="btn-group">
            <button className="btn">Union</button>
            <button className="btn">Help</button>
            <button className="btn btn-primary">More...</button>
          </div>
          <h3 className="text-2xl font-extrabold leading-tight md:text-3xl text-secondary">
            We’d like to work with you to improve what we do. Here’s how you can
            get involved and make your voice heard.
          </h3>
        </section>
        {/* card one section */}
        <section className="gap-5 mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            University <span className="text-secondary">life</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Discover things about
            <span className="text-primary"> yourself</span> and the university
          </h2>
          <CardContainer>
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
          </CardContainer>
        </section>
        {/* card two section */}
        <section className="gap-5 mb-5 flex items-center justify-center text-center flex-col px-4">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Teaching and <span className="text-secondary">learning</span>
          </h1>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Become a better
            <span className="text-primary"> you</span>
          </h2>
          <CardContainer>
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
            <Card
              src="/images/card-hero-1.jpeg"
              alt=""
              title="Explore Sheffield"
              body="Our city is scenic, creative and super friendly. You're going to love it"
              href=""
            />
          </CardContainer>
        </section>
      </Container>
    </>
  )
}
export default student
