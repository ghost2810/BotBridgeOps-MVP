import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    setChat([...chat, { role: "user", text: message }]);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setChat((c) => [...c, { role: "bot", text: data.reply }]);
    setMessage("");
  };
  return (
    <main style={{ padding: 30 }}>
      <h1>BotBridge MVP AI Chatbot</h1>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question..."
          style={{ width: 300, fontSize: 16, padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 10 }}>Send</button>
      </form>
      <div>
        {chat.map((msg, i) => (
          <div key={i} style={{ margin: "10px 0", fontWeight: msg.role === "bot" ? "bold" : "normal" }}>
            {msg.role}: {msg.text}
          </div>
        ))}
      </div>
    </main>
  );
}
