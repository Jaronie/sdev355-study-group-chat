import Message from "./Message.jsx";

export default function MessageList({ messages }) {
return (
  <ul className="messages">
    {messages[channelId].map((messaage) => (
      <Message key={message.id} message={message}/> 
    ))}
  </ul>
)
}