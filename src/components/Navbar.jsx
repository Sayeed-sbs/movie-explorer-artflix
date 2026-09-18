import logo from '../assets/logo.png';

export default function Navbar({ currentPage, onPageChange }) {
  const menuLinks = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies' },
    { id: 'tvshows', label: 'TV Shows' },
    { id: 'anime', label: 'Anime' },
  ];

  return (
    <nav className="bg-brandBg/95 backdrop-blur-md border-b border-brandGreen/20 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none"
        >
          <img 
            src={logo} 
            alt="ARTFLIX Logo" 
            className="w-9 h-9 rounded-xl object-cover shadow-md border border-brandGreen/30"
          />
          <span className="text-brandSilver font-black tracking-wider text-xl">
            ARTFLIX
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 bg-brandGreen/5 border border-brandGreen/10 px-6 py-2 rounded-full">
          {menuLinks.map((link) => {
            const isCurrent = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onPageChange(link.id)}
                className={`text-sm transition-all duration-300 relative py-1 font-medium cursor-pointer focus:outline-none ${
                  isCurrent ? 'text-brandText font-bold' : 'text-brandSilver hover:text-brandText'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-brandSilver transition-all duration-300 ${isCurrent ? 'w-full' : 'w-0'}`} />
              </button>
            );
          })}
        </div>

        <div>
          <button className="bg-brandGreen hover:bg-brandGreen/80 text-brandText font-semibold px-5 py-2 rounded-lg text-sm transition-all shadow-lg shadow-brandGreen/10 active:scale-95 cursor-pointer">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
}
