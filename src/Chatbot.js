// Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleUserMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { user: true, text: input }]);
      // Call your bot function here to process the user input and generate a response
      // For now, let's just echo the user's input
      setMessages([...messages, { user: false, text: `You said: ${input}` }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleUserMessage()}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
