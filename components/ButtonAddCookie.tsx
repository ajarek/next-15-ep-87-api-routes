'use client'

import React from 'react'
import { Button } from "@/components/ui/button";

const ButtonAddCookie = () => {
   const AddCookie = () => {
    document.cookie = 'test=lol; path=/; max-age=31536000';  
  }
  return (
    <Button onClick={()=>AddCookie()}>Add cookie</Button>
  )
}

export default ButtonAddCookie