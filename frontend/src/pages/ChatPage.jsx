import React from 'react'
import toast from 'react-hot-toast'

const ChatPage = () => {
  return (
    <div>
      <h1 className='text-4xl'>Chat Page</h1>
      <button onClick={()=>toast.success("you clicked")}>Click me</button>
    </div>
  )
}

export default ChatPage
