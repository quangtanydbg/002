import { useState } from 'react';
import { SERVICES } from '../data';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section
      id="dich-vu"
      className="py-24 md:py-36 bg-[#eaeaea] border-t border-black/5 px-6 md:px-12 relative text-black"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="space-y-4" id="services-header">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-black italic">
            Tôi làm gì
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm font-sans tracking-wider lowercase">
            Let's create the unforgettable together
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                className={`relative transition-all duration-500 rounded-sm p-8 flex flex-col justify-between cursor-pointer group select-none min-h-[220px] shadow-sm ${
                  isSelected
                    ? 'border-black bg-zinc-100'
                    : 'bg-white border border-zinc-200/60 hover:border-black/30 hover:bg-zinc-50'
                }`}
                title="Click để xem chi tiết hạng mục"
              >
                {/* Number Index */}
                <div className="absolute top-6 right-8 text-3xl font-serif text-zinc-300 group-hover:text-zinc-400 transition-colors">
                  {service.id}
                </div>

                {/* Title & Body */}
                <div className="space-y-4 max-w-[80%] pr-4 pt-4">
                  <h3 className="font-sans text-lg sm:text-xl font-medium text-black group-hover:text-zinc-700 transition-colors">
                    {service.id === "05" ? "Tiktok / Youtube" : service.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Bar: Action Indicator / Expandable contents list */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                    {isSelected ? "ĐANG MỞ CHI TIẾT" : "XEM CHI TIẾT"}
                  </span>
                  
                  <div className={`w-8 h-8 flex items-center justify-center border rounded-sm transition-all duration-300 ${
                    isSelected 
                      ? 'border-black bg-black text-white' 
                      : 'border-zinc-300 text-zinc-600 group-hover:border-black group-hover:text-black hover:bg-zinc-100'
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                  </div>
                </div>

                {/* Collapsible Details list if selected */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-zinc-200 space-y-3 animate-fade-in-up">
                    <p className="text-[11px] font-mono text-zinc-500 tracking-wider">HẠNG MỤC CUNG CẤP:</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-zinc-700">
                          <Check className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
