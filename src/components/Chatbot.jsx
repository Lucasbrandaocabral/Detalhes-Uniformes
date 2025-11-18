import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { BotMessageSquare, X, Send } from 'lucide-react';
import { getBotResponse } from '../logic/chatbotLogic';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Efeito para adicionar a mensagem de boas-vindas inicial
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: getBotResponse(''), sender: 'bot' }]);
    }
  }, [isOpen]);

  // Efeito para rolar para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Adiciona a mensagem do usuário
    const userMessage = { text: inputValue, sender: 'user' };
    // Adiciona a resposta do bot
    const botResponse = { text: getBotResponse(inputValue), sender: 'bot' };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleSuggestionClick = (suggestion) => {
    const userMessage = { text: suggestion, sender: 'user' };
    const botResponse = { text: getBotResponse(suggestion), sender: 'bot' };
    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  return (
    <div className="chatbot-container">
      {/* Janela do Chat */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Assistente Virtual</h3>
            <button onClick={() => setIsOpen(false)} className="close-chat-btn"><X size={20} /></button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {/* Elemento invisível para forçar o scroll */}
            <div ref={messagesEndRef} />
          </div>
          {/* Sugestões iniciais */}
          {messages.length === 1 && (
            <div className="suggestion-chips">
              <button onClick={() => handleSuggestionClick("Quais os prazos?")}>Prazos</button>
              <button onClick={() => handleSuggestionClick("Vocês fazem tamanhos sob medida?")}>Tamanhos</button>
              <button onClick={() => handleSuggestionClick("Como faço um orçamento?")}>Orçamento</button>
            </div>
          )}
          <div className="chat-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua pergunta..."
            />
            <button onClick={handleSendMessage} className="send-btn"><Send size={20} /></button>
          </div>
        </div>
      )}

      {/* Botão Flutuante para abrir o chat */}
      <button onClick={() => setIsOpen(!isOpen)} className="chat-toggle-btn">
        {isOpen ? <X size={28} /> : <BotMessageSquare size={28} />}
      </button>
    </div>
  );
}
