import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, Send, Trash2 } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState('Video thương mại');
  
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tanquang_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inquiries", e);
      }
    }
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Vui lòng điền họ tên và email của bạn.");
      return;
    }

    const newInquiry: Inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      service: selectedService,
      timestamp: new Date().toLocaleDateString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('tanquang_inquiries', JSON.stringify(updated));

    // Clear inputs
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('tanquang_inquiries', JSON.stringify(updated));
  };

  return (
    <section
      id="lien-he"
      className="py-24 md:py-36 bg-zinc-950 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background flare glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,15,15,0.85)_10%,rgba(0,0,0,1)_100%)] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Typographic Title Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" id="contact-header">
          <h2 className="leading-tight select-text text-center">
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase text-white block tracking-widest bg-black border border-white/20 py-4 px-8 rounded-sm max-w-max mx-auto shadow-lg text-center">
              HÃY KỂ
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-normal italic text-zinc-300 font-serif block mt-4 lowercase text-center">
              câu chuyện của bạn
            </span>
          </h2>
        </div>

        {/* Core Quick Contact Methods Row matching screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto select-none" id="contact-actions-bar">
          
          {/* Email action */}
          <div
            onClick={() => handleCopy('quangtanydbg@gmail.com', 'email')}
            className={`border cursor-pointer p-4 rounded-sm flex flex-col items-center justify-center text-center space-y-2 transition-all duration-300 ${
              copiedText === 'email'
                ? 'bg-white border-white text-black'
                : 'bg-black border-white/10 hover:border-white/30 text-zinc-300 hover:text-white'
            }`}
            title="Nhấp để sao chép email"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span className="text-[10px] tracking-wider uppercase font-mono block text-zinc-400">EMAIL</span>
            <span className="text-xs font-medium font-sans truncate max-w-full">
              {copiedText === 'email' ? 'Đã sao chép! ✓' : 'quangtanydbg@gmail.com'}
            </span>
          </div>

          {/* Phone action */}
          <div
            onClick={() => handleCopy('0988602849', 'phone')}
            className={`border cursor-pointer p-4 rounded-sm flex flex-col items-center justify-center text-center space-y-2 transition-all duration-300 ${
              copiedText === 'phone'
                ? 'bg-white border-white text-black'
                : 'bg-black border-white/10 hover:border-white/30 text-zinc-300 hover:text-white'
            }`}
            title="Nhấp để sao chép số điện thoại"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="text-[10px] tracking-wider uppercase font-mono block text-zinc-400">MOBILE / ZALO</span>
            <span className="text-xs font-medium font-mono">
              {copiedText === 'phone' ? 'Đã sao chép! ✓' : '0988602849'}
            </span>
          </div>

        </div>

        {/* Contact Form Details */}
        <div className="max-w-2xl mx-auto bg-white p-8 border border-zinc-200/80 rounded-sm shadow-2xl space-y-6">
          <p className="font-display text-sm text-center uppercase tracking-[0.2em] text-zinc-900 font-bold">
            GỬI THƯ / YÊU CẦU DỰ ÁN
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6" id="client-project-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold block">TÊN CỦA BẠN *</label>
                <input
                  type="text"
                  required
                  placeholder="Quang Tân"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white text-zinc-900 border-b border-zinc-200 focus:border-zinc-900 hover:border-zinc-400 py-2.5 px-1 text-sm font-sans placeholder-zinc-400 transition-colors focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold block">ĐỊA CHỈ EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-zinc-900 border-b border-zinc-200 focus:border-zinc-900 hover:border-zinc-400 py-2.5 px-1 text-sm font-sans placeholder-zinc-400 transition-colors focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold block">SỐ ĐIỆN THOẠI</label>
                <input
                  type="tel"
                  placeholder="09xx xxx xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white text-zinc-900 border-b border-zinc-200 focus:border-zinc-900 hover:border-zinc-400 py-2.5 px-1 text-sm font-sans placeholder-zinc-400 transition-colors focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold block">THỂ LOẠI MONG MUỐN</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white text-zinc-900 border-b border-zinc-200 focus:border-zinc-900 hover:border-zinc-350 py-2 pb-2.5 pr-4 text-sm font-sans transition-colors focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="Video thương mại">Video thương mại và quảng cáo</option>
                  <option value="TVC Doanh Nghiệp">TVC Doanh Nghiệp</option>
                  <option value="Wedding Film">Wedding Wedding Film</option>
                  <option value="Event Film">Event Highlight Film</option>
                  <option value="TikTok / Youtube">TikTok / Youtube Reels</option>
                  <option value="Sản xuất trọn gói">Sản xuất trọn gói A-Z</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold block">NỘI DUNG Ý TƯỞNG / BRIEF ĐẦU BÀI</label>
              <textarea
                rows={3}
                placeholder="Nêu vắn tắt mong muốn của bạn, thời lượng và ngân sách dự tính nếu có..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white text-zinc-900 border-b border-zinc-200 focus:border-zinc-900 hover:border-zinc-400 py-2.5 px-1 text-sm font-sans placeholder-zinc-400 transition-colors focus:outline-none resize-none"
              />
            </div>

            {submitted && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs font-sans rounded-sm text-center animate-fade-in">
                Thông tin yêu cầu của bạn đã được gửi thành công! Tấn Quang sẽ phản hồi sớm nhất.
              </div>
            )}

            <button
              type="submit"
              id="form-submit-btn"
              className="w-full py-4 text-xs font-bold tracking-widest text-white uppercase bg-zinc-950 hover:bg-zinc-800 transition-colors rounded-sm cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>NHẬN TƯ VẤN NGAY</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Dynamic Inbox logs showing submitted values directly on client verification */}
        {inquiries.length > 0 && (
          <div className="max-w-2xl mx-auto bg-black p-6 border border-zinc-850 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-bold">
                YÊU CẦU ĐÃ GỬI GẦN ĐÂY (LƯU TRỮ LÊN HOOK):
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                {inquiries.length} tin nhắn gửi đi
              </span>
            </div>

            <div className="max-h-[220px] overflow-y-auto space-y-3 pr-2 scrollbar-none">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-3.5 bg-zinc-950 border border-white/5 rounded-sm relative group/inq">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white font-sans">{inq.name}</p>
                      <p className="text-[10px] text-zinc-400 font-mono font-light mt-0.5">
                        {inq.email} {inq.phone ? `| ${inq.phone}` : ''}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-[9px] font-mono text-zinc-500">{inq.timestamp}</span>
                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="text-zinc-600 hover:text-red-400 pointer transition-colors"
                        title="Xóa log"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-300 font-light font-sans space-y-1 bg-zinc-900 p-2.5 rounded-sm">
                    <p className="text-[10px] font-mono text-zinc-500">
                      THỂ LOẠI: <span className="text-zinc-400 font-bold">{inq.service}</span>
                    </p>
                    <p className="italic">"{inq.message || 'Không có brief đính kèm.'}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
