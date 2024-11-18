import React from "react"
import { LeftChat } from "./chat-messages/left-chat"
import { RightChat } from "./chat-messages/right-chat"
export function ChatWindow() {
  const [messages, setMessages] = React.useState([
    {
    from : "bot",
    "message": "Hello! how can I help you today?"
    },
    {
      from: "user",
      "message": "I need help with my account"
    }

  ])
  return (
    <div style={{
      border: '1px solid black',
      height: 'calc(100% - 120px)'
    }}>
    {messages.map((message)=>{
      if (message.from === "bot"){
        return <LeftChat message= {message.message}/>
      }
      else{
        return <RightChat message= {message.message}/>
      }
    })}
    <LeftChat />   
    <RightChat/>
    </div>

  )
}

