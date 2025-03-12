import React, { useState } from "react";

const Chatbot = ({ closeChat }) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Meyvn's AI Assistant. How can I help you today?", sender: "bot" },
  ]);
  const [suggestion, setSuggestion] = useState(null);

  // Enhanced knowledge base
  const knowledgeBase = {
    greetings: {
      phrases: [
        "hello", "hi", "hallo", "good morning", "good afternoon", "good evening",
        "goodnight", "mwiriwe neza", "mwiriwe gute", "bonjour", "hi there", "nice to meet you"
      ],
      response: "Hello! How can I assist you today?"
    },
    services: {
      phrases: [
        "services", "what do you offer", "what services do you provide", "design", "graphic design",
        "ui ux", "product design", "branding", "seo", "search engine optimization", "digital marketing",
        "social media management", "web design", "web development", "mobile app development", "webmaster",
        "it support", "maintenance"
      ],
      response: "We offer a wide range of services including:\n- Graphic Design\n- UI/UX Design\n- Product Design\n- Branding\n- SEO/Search Engine Optimization\n- Digital Marketing\n- Social Media Management\n- Web Design & Development\n- Mobile App Development\n- IT Support & Maintenance\n- Webmaster Services"
    },
    aboutMeyvn: {
      phrases: [
        "about meyvn", "when was meyvn founded", "who is the managing director", "contacts for meyvn",
        "hours of work", "location", "social media", "what is meyvn"
      ],
      response: "Meyvn Agency was founded in [YEAR]. Our Managing Director is [NAME]. You can reach us at [EMAIL] or [PHONE]. We are open from 9 AM to 5 PM, Monday to Friday. Our office is located at [ADDRESS]. Follow us on Instagram: [@HANDLE]."
    },
    team: {
      phrases: [
        "who is the MD", "who is the managing director", "customer support", "hiring manager", "marketing team",
        "designer", "developer", "IT guy", "contact someone from meyvn"
      ],
      response: "Here are some key contacts at Meyvn:\n- Managing Director: [MD NAME]\n- Customer Support: [SUPPORT EMAIL]\n- Hiring Manager: [HIRING EMAIL]\n- Marketing Team: [MARKETING EMAIL]\n- Designers & Developers: [DESIGN EMAIL]\n- IT Support: [IT EMAIL]"
    }
  };

  // Function to find the best matching category
  const findMatchingCategory = (input) => {
    const lowerInput = input.toLowerCase();
    for (const category in knowledgeBase) {
      if (knowledgeBase[category].phrases.some(phrase => lowerInput.includes(phrase))) {
        return category;
      }
    }
    return null;
  };

  // Handle user input
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const userMessage = userInput.trim();

    if (userMessage) {
      const newMessages = [...messages, { text: userMessage, sender: "user" }];

      const category = findMatchingCategory(userMessage);
      if (category) {
        newMessages.push({ text: knowledgeBase[category].response, sender: "bot" });
      } else {
        newMessages.push({
          text: "Sorry, I didn't understand. Please contact our support team for further assistance.",
          sender: "bot"
        });
      }

      setMessages(newMessages);
      setUserInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h2>Meyvn AI Assistant</h2>
        <button onClick={closeChat}>X</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>

      <div className="contact-options">
        <p>Prefer to contact us directly?</p>
        <ul>
          <li>
            <a href="https://wa.me/250781996271" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:support@meyvn.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chatbot;