import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        let url = 'https://api.tvmaze.com/shows';
        if (searchQuery.trim() !== '') {
          url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (searchQuery.trim() !== '') {
          const transformedData = data.map((item) => item.show);
          setMovies(transformedData);
        } else {
          setMovies(data.slice(0, 24));
        }
      } catch (error) {
        console.error("Data tracking failure:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchMovies();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <div className="space-y-10 py-6 animate-fade-in">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          EXPLORE THE DATABASE
        </h1>
        <p className="text-brandSilver/70 text-sm md:text-base font-medium max-w-md">
          Browse popular selections or enter a specific title keywords to query live API media entries.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brandSilver/40">
          🔍
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie or show title..."
          className="w-full bg-brandGreen/5 border border-brandGreen/20 rounded-2xl pl-11 pr-5 py-4 text-brandText placeholder-brandSilver/30 focus:outline-none focus:border-brandGreen/50 focus:ring-1 focus:ring-brandGreen/50 transition-all duration-300 shadow-xl text-sm font-medium"
        />
      </div>

      {isLoading ? (
        <div className="text-center py-20">
          <div className="inline-block w-8 h-8 border-2 border-brandGreen border-t-transparent rounded-full animate-spin" />
          <p className="text-brandSilver/50 text-xs font-semibold uppercase tracking-wider mt-4">
            Querying index matrix...
          </p>
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center py-20 space-y-2">
          <p className="text-brandText font-bold text-lg">No Results Found</p>
          <p className="text-brandSilver/60 text-sm">We couldn't find any shows matching "{searchQuery}".</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} show={movie} onViewDetails={setSelectedShow} />
          ))}
        </div>
      )}

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}