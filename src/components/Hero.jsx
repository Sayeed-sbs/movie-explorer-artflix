import { useState, useEffect } from 'react';

export default function Hero({ onExplore }) {
  const [posters, setPosters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows?page=0');
        const data = await response.json();

        const withImages = data.filter((show) => show.image?.original);
        const picked = withImages.slice(0, 16).map((show) => ({
          id: show.id,
          name: show.name,
          image: show.image.original,
        }));

        setPosters(picked);
      } catch (error) {
        console.error("Poster fetch failed:", error);
      }
    };

    fetchPosters();
  }, []);

  useEffect(() => {
    if (posters.length === 0) return;

    const rotateInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posters.length);
    }, 3000);

    return () => clearInterval(rotateInterval);
  }, [posters]);

  const spotlightPosters = posters.slice(0, 8);
  const wallPosters = posters.slice(0, 16);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-brandGreen/20 shadow-2xl">

      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-1">
        {wallPosters.map((poster) => (
          <div key={poster.id} className="relative aspect-[2/3] overflow-hidden">
            <img
              src={poster.image}
              alt={poster.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-brandBg/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-brandGreen/40 via-brandBg/70 to-brandBg/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,106,79,0.25),transparent_55%)]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-8 py-20 md:py-16 md:px-16">

        <div className="max-w-xl flex flex-col items-start text-left">
          <span className="flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-widest bg-brandGreen/90 backdrop-blur-sm border border-brandGreen/50 shadow-lg px-4 py-1.5 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            Now Streaming
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-brandText tracking-tight leading-none mb-6">
            DISCOVER YOUR NEXT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGreen to-brandSilver">
              CINEMATIC ART
            </span>
          </h1>

          <p className="text-brandSilver text-base md:text-lg font-medium leading-relaxed max-w-xl mb-10">
            Explore and discover your favorite movies from around the world. Track ratings, read details, and unlock thousands of cinematic pieces instantly.
          </p>

          <button
            onClick={onExplore}
            className="bg-brandGreen hover:bg-brandGreen/90 text-brandText font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-brandGreen/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2 group"
          >
            Explore Now
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div className="relative w-56 h-80 md:w-64 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-brandGreen/30 bg-brandBg">
          {spotlightPosters.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-brandGreen border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            spotlightPosters.map((poster, index) => (
              <img
                key={poster.id}
                src={poster.image}
                alt={poster.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
            <p className="text-white text-sm font-bold tracking-tight line-clamp-1">
              {spotlightPosters[activeIndex]?.name || ''}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}