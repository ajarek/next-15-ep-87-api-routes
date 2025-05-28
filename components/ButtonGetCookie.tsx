'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

const ButtonGetCookie = () => {
  const [cookieValue, setCookieValue] = React.useState<string>('')
  const GetCookie = () => {
    const name = 'test='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        const cookieValue = c.substring(name.length, c.length)
        setCookieValue(cookieValue)
      }
    }
    console.log("Cookie 'test' nie znaleziono.")
    return ''
  }
  return (
    <div>
      <Button onClick={() => GetCookie()}>Pobierz cookie</Button>
      {cookieValue && <p>Wartość cookie: {cookieValue}</p>}
    </div>
  )
}

export default ButtonGetCookie
