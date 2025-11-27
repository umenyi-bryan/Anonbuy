'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your ANONBUY AI assistant. I can help you find tech products, compare prices, and answer any questions!",
      isBot: true
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    }

    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        isBot: true
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('gaming')) {
      return "I recommend checking our gaming section! We have RTX 4090 graphics cards starting at $1599, gaming laptops from $1299, and mechanical keyboards from $79. Want me to show you specific products?"
    }
    
    if (lowerMessage.includes('laptop') || lowerMessage.includes('computer')) {
      return "We have a great selection of laptops! Gaming laptops start at $999, ultrabooks from $1299, and workstation laptops from $1999. What's your budget and primary use case?"
    }
    
    if (lowerMessage.includes('phone') || lowerMessage.includes('smartphone')) {
      return "Our smartphone collection includes latest iPhones from $799, Samsung Galaxy from $699, and Google Pixel from $599. Looking for any specific features?"
    }
    
    if (lowerMessage.includes('cyber') || lowerMessage.includes('security')) {
      return "For cybersecurity, we offer VPN routers from $199, encrypted storage from $129, security keys from $25, and privacy-focused smartphones. Need protection for home or business?"
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cheap')) {
      return "I can help you find the best deals! We have daily flash sales and price match guarantees. What specific product are you looking for?"
    }
    
    return "I can help you find the perfect tech product! We have over 5000 items across gaming, cybersecurity, smartphones, and more. What specific product category interests you today?"
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-secondary border border-gray-700 rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-black p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="text-accent" size={20} />
              <h3 className="font-semibold">ANONBUY AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-accent text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about products, prices, or recommendations..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-accent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-accent text-black p-2 rounded-lg hover:bg-green-400 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
