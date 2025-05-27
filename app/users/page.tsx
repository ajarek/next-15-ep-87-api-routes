'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

async function makePostRequest(userName: string, messageText: string) {
  const res = await fetch(`/api/hello`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: userName, message: messageText }),
  })

  const data = await res.json()
  return { data }
}

export default function Friends() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const onClick = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const target = form.target as typeof form.target & {
      userName: { value: string }
      text: { value: string }
    }
    const userName = target.userName.value
    const messageText = target.text.value
    const { data } = await makePostRequest(userName, messageText)
    setMessage(data.message)
    setName(data.name)
    target.userName.value = ''
    target.text.value = ''
  }
  const reset = () => {
    setMessage('')
    setName('')
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='space-x-5'>
        {name} {message}
      </h1>
      <form
        onSubmit={onClick}
        className='flex flex-col gap-4 border-2 border-green-400 p-6 rounded-lg'
      >
        <Input
          type='text'
          name='userName'
          className='border-2 rounded-lg p-2 '
          required
        />
        <Textarea
          name='text'
          id=''
          className='border-2 p-2 rounded-lg  '
          required
        ></Textarea>

        {!message && (
          <Button
            type='submit'
            className='bg-green-400 '
          >
            Submit
          </Button>
        )}
        {message && (
          <button
            onClick={reset}
            className='px-4 py-2 bg-red-400 rounded-lg '
          >
            Return
          </button>
        )}
      </form>
    </div>
  )
}
