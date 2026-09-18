import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-brandBg text-brandText flex flex-col antialiased">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {currentPage === 'home' && <Home onExplore={() => setCurrentPage('movies')} />}
        {currentPage === 'movies' && <Movies />}
        
        {(currentPage === 'tvshows' || currentPage === 'anime') && (
          <div className="py-32 text-center max-w-md mx-auto space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight capitalize">
              {currentPage} Hub
            </h1>
            <p className="text-brandSilver text-sm">
              Index rows are currently expanding. Check back soon for synchronized content streams.
            </p>
          </div>
        )}
      </main>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
