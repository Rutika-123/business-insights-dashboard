function ChatbotButton({ onClick }) {
  return (
    <button className="chatbot-floating-button" onClick={onClick} title="Open AI Business Analyst">
      <span className="chat-pulse"></span>
      <i className="bi bi-stars"></i>
      <span className="chatbot-tooltip">AI Business Analyst</span>
    </button>
  );
}

export default ChatbotButton;