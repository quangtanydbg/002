import React, { useState, useEffect, useRef } from 'react';
import { Camera, Film, Award, Upload } from 'lucide-react';

export default function About() {
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80');
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fallbackImageSrc = "https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    const savedImage = localStorage.getItem('quang_tan_profile_img');
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackImageSrc);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageSrc(base64String);
        localStorage.setItem('quang_tan_profile_img', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      id="gioi-thieu"
      className="py-24 md:py-36 bg-black border-t border-white/5 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Info */}
        <div className="lg:col-span-7 space-y-8" id="about-text-column">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block">
              PORTFOLIO PROFILE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              GIỚI THIỆU
            </h2>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-snug text-white tracking-tight">
              XIN CHÀO, TÔI LÀ QUANG TÂN <br />
              <span className="text-zinc-400">
                MỘT VIDEOGRAPHER VỚI HƠN 5 NĂM KINH NGHIỆM QUAY DỰNG VIDEO!
              </span>
            </h3>

            <p className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed font-light">
              <strong>Đam mê của tôi là biến những ý tưởng táo bạo thành những câu chuyện hình ảnh hấp dẫn, không chỉ đẹp mắt mà còn mang lại cảm giác chân thực.</strong>
            </p>

            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed italic border-l-2 border-white/20 pl-4 py-1">
              "Mình làm đa dạng thể loại như commercial, TVC, wedding, TikTok/Reels và YouTube content. Phong cách mình theo đuổi là tối giản và tập trung vào cảm xúc, giúp mỗi video không chỉ đẹp mà còn có câu chuyện riêng."
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10" id="about-stats">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">5+</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">YEARS EXP</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">200+</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">PROJECTS</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">98%</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">SATISFIED</span>
            </div>
          </div>
        </div>

        {/* Right Column: B&W/Color Graded Studio Image */}
        <div className="lg:col-span-5 relative group" id="about-image-column">
          <div className="absolute inset-x-0 -top-4 -left-4 w-full h-full border border-white/10 rounded-sm z-0 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          
          <div 
            onClick={triggerUpload}
            className="relative z-10 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-zinc-950 rounded-sm overflow-hidden border border-white/5 shadow-2xl cursor-pointer"
          >
            <img
              src={imageSrc}
              onError={handleImageError}
              alt="Quang Tan Studio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-[1.05] brightness-90 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-[1.02]"
            />
            {/* Subtle cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Absolute hovering Upload trigger button */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <div className="bg-black/80 backdrop-blur-md py-3 px-5 border border-white/20 rounded-full flex items-center space-x-2 shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300 hover:bg-white hover:text-black">
                <Upload className="w-4 h-4" />
                <span className="text-xs font-mono tracking-widest uppercase">Tải ảnh chân dung</span>
              </div>
              <p className="text-[10px] text-zinc-400 font-sans mt-2 tracking-wider">Hỗ trợ JPG, PNG, WEBP. Tự động fit khung.</p>
            </div>
            
            <div className="absolute bottom-4 left-4 z-30 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                QUANG TAN / HANOI CREATIVE STUDIO
              </p>
            </div>
          </div>

          {/* Hidden File Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

      </div>
    </section>
  );
}
