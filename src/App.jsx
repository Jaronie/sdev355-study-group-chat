import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";

function now() {
  return new Date().toLocateTimeString([], { hour: "numeric", minute: "2-digit"});

}
export default function App() {

const [activeId, setActiveId] = useState("general");
const [messages, setMessages] = useState(SEED_MESSAGES);

const channel = CHANNELS.find((c) => c.id === activeId);

function handleSend(text) {
  const message = { id: crypto.randomUUID(), author: "You", time: now(), hearts: 0, text };
  setMessages({ ...messages, [activeId]: [...messages[activeId], message] });

  const [isTyping, setIsTyping] = useState(false);
}

function handleReact(id) {
  const updated = messages[activeId].map((m) =>
  m.id === id ? { ...m, hearts: m.hearts + 1 } : m);
  setMessages({...messages, [activeId]: updated });
}




  return (
    <div className="app">
      <Sidebar 
      channels={CHANNELS}
      activeId={activeI}
      onSelectChannel={setActiveId} />
      <main className="main">
        <ChatHeader channel={channel} />
        <MessageList messages={messages[activeId]} />
        <Composer onSend={handleSend}/>
      </main>
    </div>
  );
}
