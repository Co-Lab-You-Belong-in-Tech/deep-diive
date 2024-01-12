import Link from 'next/link'
import React from 'react'
import { RoutePath } from 'routes'

const Landing = () => {
  return (
    <>
    <div>Landing page</div>
    <Link href={RoutePath.Game}>go to game</Link>
    </>
  )
}

export default Landing