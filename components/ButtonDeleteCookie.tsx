'use client'

import React from 'react'
import { Button } from "@/components/ui/button";

const ButtonDeleteCookie = () => {
   const DeleteCookie = () => {
    document.cookie = 'test=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }
  return (
    <Button onClick={()=>DeleteCookie()}>Delete cookie</Button>
  )
}

export default ButtonDeleteCookie