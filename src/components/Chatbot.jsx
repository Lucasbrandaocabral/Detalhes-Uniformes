import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { BotMessageSquare, X, Send } from 'lucide-react';
import { getBotResponse, getWelcomeMessage } from '../logic/chatbotLogic';

function TypingIndicator() {
  return (
    <div className="message bot typing-indicator">
      <span /><span /><span />
    </div>
  );
}

function MessageText({ text }) {
  return (
    <p className="message-text">
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line.includes('wa.me') ? (
            <a href={line.match(/https?:\/\/\S+/)?.[0]} target="_blank" rel="noopener noreferrer" className="chat-link">
              Clique aqui para abrir o WhatsApp
            </a>
          ) : line}
          {i < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome = getWelcomeMessage();
      setMessages([{ text: welcome.text, sender: 'bot' }]);
      setSuggestions(welcome.suggestions);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setSuggestions([]);
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setIsTyping(false);
      setMessages(prev => [...prev, { text: response.text, sender: 'bot' }]);
      setSuggestions(response.suggestions || []);
    }, 900);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="bot-avatar">
                <BotMessageSquare size={20} />
              </div>
              <div>
                <p className="bot-name">Assistente Virtual</p>
                <p className="bot-status"><span className="status-dot" />Online agora</p>
              </div>
            </div>
            <button onClick={handleClose} className="close-chat-btn"><X size={20} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="bot-icon"><BotMessageSquare size={14} /></div>
                )}
                <MessageText text={msg.text} />
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {suggestions.length > 0 && !isTyping && (
            <div className="suggestion-chips">
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => sendMessage(s)}>{s}</button>
              ))}
            </div>
          )}

          <div className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(inputValue)}
              placeholder="Digite sua pergunta..."
            />
            <button onClick={() => sendMessage(inputValue)} className="send-btn">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button onClick={isOpen ? handleClose : handleOpen} className="chat-toggle-btn">
        {isOpen ? <X size={26} /> : <BotMessageSquare size={26} />}
      </button>
    </div>
  );
}
