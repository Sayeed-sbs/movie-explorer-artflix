import logo from '../assets/logo.png';

export default function Footer({ onPageChange }) {
  const socials = [
    { name: 'YouTube', url: 'https://youtube.com', svg: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'Twitter', url: 'https://twitter.com', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { name: 'GitHub', url: 'https://github.com', svg: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
    { name: 'Facebook', url: 'https://facebook.com', svg: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z' },
    { name: 'Discord', url: 'https://discord.com', svg: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.196.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z' }
  ];

  return (
    <footer className="bg-brandBg border-t border-brandGreen/20 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col items-start gap-4">
            <button 
              onClick={() => onPageChange('home')} 
              className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5 text-left focus:outline-none cursor-pointer"
            >
              <img 
                src={logo} 
                alt="ARTFLIX Logo" 
                className="w-8 h-8 rounded-lg object-cover border border-brandGreen/30 shadow-md"
              />
              <span className="text-brandSilver font-black tracking-wider text-lg">
                ARTFLIX
              </span>
            </button>
            <p className="text-brandSilver/60 text-sm font-medium leading-relaxed max-w-xs">
              Your gateway to visual discovery, cinematic data structures, and intuitive layouts.
            </p>
          </div>

          <div>
            <h4 className="text-brandText font-bold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 items-start">
              <button onClick={() => onPageChange('home')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Home</button>
              <button onClick={() => onPageChange('movies')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Movies</button>
              <button onClick={() => onPageChange('tvshows')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">TV Shows</button>
              <button onClick={() => onPageChange('anime')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Anime</button>
            </div>
          </div>

          <div>
            <h4 className="text-brandText font-bold text-sm uppercase tracking-wider mb-4">
              Top Genres
            </h4>
            <div className="flex flex-col gap-2.5 items-start">
              <button onClick={() => onPageChange('movies')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Action & Sci-Fi</button>
              <button onClick={() => onPageChange('movies')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Drama & Romance</button>
              <button onClick={() => onPageChange('movies')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Thriller & Mystery</button>
              <button onClick={() => onPageChange('movies')} className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer focus:outline-none">Animation & Anime</button>
            </div>
          </div>

          <div>
            <h4 className="text-brandText font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5 items-start">
              <a href="#" className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer">Privacy Statement</a>
              <a href="#" className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer">Terms of Service</a>
              <a href="#" className="text-brandSilver/70 hover:text-brandText transition-colors text-sm font-medium cursor-pointer">Cookie Setup</a>
            </div>
          </div>

        </div>

        <div className="border-t border-brandGreen/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brandSilver/40 text-xs font-semibold tracking-wide order-2 md:order-1">
            © 2026 ARTFLIX. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            {socials.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                title={platform.name}
                className="w-9 h-9 rounded-xl bg-brandGreen/5 border border-brandGreen/10 hover:border-brandSilver/30 flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 fill-brandSilver group-hover:fill-brandText transition-colors duration-300"
                >
                  <path d={platform.svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
