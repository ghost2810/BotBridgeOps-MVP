export default function handler(req, res) {
  const { message } = req.body;
  let reply = "Hello! I'm your Botbridge MVP chatbot.";
  if (message) {
    if (message.toLowerCase().includes("hello"))
      reply = "Hi there! How can I help you today?";
    else if (message.toLowerCase().includes("help"))
      reply = "Sure, tell me what you need help with.";
  }
  res.status(200).json({ reply });
}
if (message.toLowerCase().includes('your name')) {
  reply = "I'm BotBridge, your friendly MVP chatbot!";
} else if (message.toLowerCase().includes('do')) {
  reply = "I can answer simple questions and help you learn!";
}
