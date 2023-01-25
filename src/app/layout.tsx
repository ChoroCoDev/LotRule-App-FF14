'use client'
import { useEffect, useState } from 'react'
import { connect } from 'mongoose'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [jobs, setJobs] = useState()

  return (
    <html lang='en'>
      <head />
      <body>
        {children}
        <div>{jobs}</div>
      </body>
    </html>
  )
}
