import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Page1</h1>
      <Link href='/page2'>page2へ</Link>
    </>
  )
}