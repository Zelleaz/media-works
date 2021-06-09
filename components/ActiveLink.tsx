import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useEffect } from 'react'
import { IActiveLinkProps } from './types'

export const ActiveLink: React.FC<IActiveLinkProps> = ({href, children ,activeClassName = '', className = ''}) => {
  const router = useRouter()

  const handleClick = useCallback((event) => {
    event.preventDefault()
    router.push(href)
  }, [router, href])

  const isCurrentPath = router.pathname === href || router.asPath === href

  useEffect(() => {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname)
    }
  })

  return (
    <a href={href} onClick={handleClick} className={`${className} ${isCurrentPath ? activeClassName : ''}`}>
      {children} 
    </a>
  )
}
