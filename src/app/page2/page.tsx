import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Page2</h1>
      <Link href='/page1'>page1へ</Link>
    </>
  )
}
