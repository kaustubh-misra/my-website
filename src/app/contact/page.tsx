export default function Contact() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center px-4">
      {/* Left tile (empty) */}
      <div className="flex-1" />
      {/* Center tile (content) */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="font-bold text-primary" style={{ fontSize: '30px', marginBottom: '2cm' }}>Contact</h1>
        <form className="flex flex-col w-full max-w-md items-center" style={{ gap: '2cm' }}>
          <input type="text" placeholder="Your Name" className="p-2 border rounded w-full" style={{ fontSize: '20px' }} />
          <input type="email" placeholder="Your Email" className="p-2 border rounded w-full" style={{ fontSize: '20px' }} />
          <textarea placeholder="Your Message" className="p-2 border rounded w-full" rows={4} style={{ fontSize: '20px' }} />
          <button type="submit" className="bg-primary text-white py-2 rounded transition-colors w-full" style={{ fontSize: '20px', backgroundColor: '#16348C' }}>Send</button>
        </form>
      </div>
      {/* Right tile (empty) */}
      <div className="flex-1" />
    </div>
  );
} 