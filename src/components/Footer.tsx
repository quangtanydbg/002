export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="bg-black py-16 px-6 md:px-12 border-t border-white/5 relative z-10 text-center"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Large Branding Logo Type */}
        <div className="space-y-2">
          <a
            href="#home"
            className="font-display text-2xl sm:text-3xl font-black tracking-wide text-white hover:text-zinc-200 transition-colors uppercase"
          >
            TANQUANG MEDIA
          </a>
        </div>



        {/* Separator */}
        <div className="w-12 h-[1px] bg-white/10 mx-auto" />

        {/* Copyright claims */}
        <p className="text-[10px] font-mono tracking-widest text-zinc-600 block">
          © {currentYear} TANQUANG MEDIA. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}
