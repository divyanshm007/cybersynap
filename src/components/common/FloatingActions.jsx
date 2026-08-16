import { useState, useEffect } from 'react';
import { ArrowUp, X, Send } from 'lucide-react';

const WA_NUMBER = '919005977780';
const WA_MESSAGE = encodeURIComponent(
  'Hi CyberSynap! 👋 I visited your website and I\'m interested in your services. Could you please share more details?'
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const chatResponses = {
  default: "Hi! I'm CyberSynap's assistant. How can I help you today?",
  services: "We offer Software Development, Web & Mobile Apps, AI Automation, ERP, CRM, POS, WMS, HRMS, and Cloud & DevOps. Which interests you?",
  pricing: "Our projects start from $5,000. The exact cost depends on scope and requirements. Would you like a free consultation?",
  contact: "You can reach us at query@cybersynap.com or call +91 90059 77780. Or book a consultation at cybersynap.com/contact.",
  erp: "Our ERP covers Finance, HR, Inventory, Procurement, and Reporting — fully customisable for your industry. Want a demo?",
  pos: "We build Restaurant POS, Retail POS, Pharmacy POS with KDS, WMS, and loyalty integrations. Which industry are you in?",
};

const quickReplies = [
  { label: '🛠 Our Services', key: 'services' },
  { label: '💰 Pricing', key: 'pricing' },
  { label: '📞 Contact Us', key: 'contact' },
  { label: '📦 ERP Solution', key: 'erp' },
  { label: '🖥 POS Systems', key: 'pos' },
];

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: chatResponses.default },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: 'user', text };
    const lower = text.toLowerCase();
    let botText = "Thanks for your message! For detailed assistance, please reach out at query@cybersynap.com or call +91 90059 77780.";
    for (const [key, response] of Object.entries(chatResponses)) {
      if (key !== 'default' && lower.includes(key)) { botText = response; break; }
    }
    setMessages((prev) => [...prev, userMsg, { from: 'bot', text: botText }]);
    setInput('');
  };

  const handleQuick = (key) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: quickReplies.find((q) => q.key === key)?.label || key },
      { from: 'bot', text: chatResponses[key] },
    ]);
  };

  return (
    <>
      {/* Floating stack — bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Scroll to top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #8B3DFF, #E83E9F)' }}
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
          style={{
            width: '52px',
            height: '52px',
            background: '#25D366',
            boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          }}
        >
          <WhatsAppIcon />
        </a>

        {/* Chatbot toggle */}
        <button
          onClick={() => setChatOpen((o) => !o)}
          aria-label={chatOpen ? 'Close chat' : 'Open chat'}
          className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
          style={{
            width: '52px',
            height: '52px',
            background: chatOpen ? '#6D2DF0' : 'linear-gradient(135deg, #8B3DFF, #E83E9F)',
            boxShadow: '0 4px 20px rgba(139,61,255,0.4)',
          }}
        >
          {chatOpen ? <X size={20} /> : <ChatIcon />}
        </button>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 rounded-3xl overflow-hidden flex flex-col"
          style={{
            boxShadow: '0 20px 60px rgba(40,20,60,0.22)',
            border: '1px solid rgba(139,61,255,0.15)',
            maxHeight: '480px',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3.5 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #8B3DFF, #E83E9F)' }}
          >
            <img src="/favicon.png" alt="CyberSynap" className="w-8 h-8 rounded-full object-contain bg-white/20 p-0.5" />
            <div>
              <div className="text-white font-bold text-sm leading-tight">CyberSynap</div>
              <div className="text-purple-200 text-xs flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-300"></span>
                Online · Typically replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
            style={{ background: '#FAFAFA', minHeight: '220px', maxHeight: '280px' }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={
                    msg.from === 'user'
                      ? { background: 'linear-gradient(135deg,#8B3DFF,#E83E9F)', color: '#fff', borderBottomRightRadius: '4px' }
                      : { background: '#fff', color: '#15121C', border: '1px solid rgba(139,61,255,0.12)', borderBottomLeftRadius: '4px' }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick replies — only show after first bot message when no user input yet */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickReplies.map((q) => (
                  <button
                    key={q.key}
                    onClick={() => handleQuick(q.key)}
                    className="text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:scale-105"
                    style={{ background: 'rgba(139,61,255,0.08)', color: '#8B3DFF', border: '1px solid rgba(139,61,255,0.2)' }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-2.5 flex items-center gap-2" style={{ background: '#fff', borderTop: '1px solid rgba(139,61,255,0.1)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Type a message..."
              className="flex-1 text-sm outline-none bg-transparent text-[#15121C] placeholder:text-[#82798D]"
            />
            <button
              onClick={() => sendMessage(input)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-110"
              style={{ background: 'linear-gradient(135deg,#8B3DFF,#E83E9F)' }}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
