export default function WhatsApp() {
  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
      <a
        href="https://wa.me/918879035035?text=Hello%20Being%20Sevak%20Charitable%20Trust%2C%20I%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white text-3xl shadow-lg transition-transform hover:scale-110"
        style={{ animation: 'whatsapp-pulse 2s infinite' }}
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  )
}
