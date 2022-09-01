import Link from 'next/link'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-base-200">
      <footer className="p-10 mx-auto footer text-base-content max-w-screen-2xl">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-primary">
            SHU
          </h2>
          <p>
            City Campus, Howard Street, Sheffield, S1 1WB, UK
            <br />
            Phone +44 (0)114 225 5555
          </p>
        </div>
        <div>
          <span className="footer-title">Courses and study</span>
          <Link href="">
            <a className="link link-hover">Undergraduate courses</a>
          </Link>

          <Link href="">
            <a className="link link-hover">Postgraduate courses</a>
          </Link>
          <Link href="">
            <a className="link link-hover">International students</a>
          </Link>
          <Link href="">
            <a className="link link-hover">How to apply</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Accommodation</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Fees and funding</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">About</span>
          <Link href="">
            <a className="link link-hover">Who we are</a>
          </Link>
          <Link href="">
            <a className="link link-hover">News</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Jobs</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Staff search</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Contact us</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal information</span>
          <Link href="">
            <a className="link link-hover">Accessibility</a>
          </Link>

          <Link href="">
            <a className="link link-hover">How we use cookies</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Freedom of information</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Legal information</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Modern slavery statement</a>
          </Link>
          <Link href="">
            <a className="link link-hover">Privacy and GDPR</a>
          </Link>
        </div>
      </footer>
    </div>
  )
}
