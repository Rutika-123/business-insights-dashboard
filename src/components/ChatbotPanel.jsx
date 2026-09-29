import { useState } from "react";

const mockResponses = [
  "Based on the available dashboard data, sales are showing an upward trend. Electronics and North America are currently contributing strongly to revenue.",
  "The dashboard shows that Electronics is the leading category by sales. You can use the Category filter to explore the details.",
  "North America currently contributes the largest regional share of sales. Try comparing it with Europe and Asia Pacific for more context.",
  "The top products are driving a significant portion of revenue. I can help you explore product-level trends once the real data connection is added."
];

function ChatbotPanel({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm your AI Business Analyst. Ask me about sales, customers, products, or trends.", time: "10:45 AM" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMessage = { sender: "user", text, time: "Now" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setMessages((prev) => [...prev, { sender: "ai", text: response, time: "Now" }]);
    }, 650);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chatbot-panel ${isOpen ? "open" : ""}`}>
      <div className="chat-header">
        <div className="chat-agent">
          <div className="agent-icon"><i className="bi bi-stars"></i></div>
          <div><strong>AI Business Analyst</strong><span>Ask me about your business data</span></div>
        </div>
        <button className="chat-close" onClick={onClose}><i className="bi bi-x-lg"></i></button>
      </div>

      <div className="chat-messages">
        <div className="chat-date">TODAY</div>
        {messages.map((message, index) => (
          <div className={`message-row ${message.sender}`} key={index}>
            {message.sender === "ai" && <div className="small-agent-icon"><i className="bi bi-stars"></i></div>}
            <div className="message-content">
              <div className="message-bubble">{message.text}</div>
              <small>{message.time}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-suggestions">
        <button onClick={() => setInput("Why did sales increase this month?")}>Why did sales increase?</button>
        <button onClick={() => setInput("Which category has the highest sales?")}>Top category?</button>
      </div>

      <div className="chat-input-area">
        <button className="chat-tool"><i className="bi bi-paperclip"></i></button>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your business data..."
          rows="1"
        />
        <button className="send-button" onClick={sendMessage}><i className="bi bi-send-fill"></i></button>
      </div>
      <div className="mock-note">Frontend prototype • Mock AI responses</div>
    </div>
  );
}

export default ChatbotPanel;