import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="https://sebastianelectric.netlify.app">
      <a>
        Go back home
      </a>
    </Link>
  </>
}
