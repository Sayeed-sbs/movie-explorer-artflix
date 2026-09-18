export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const { name, image, summary, premiered, rating, genres } = show;

  const backdropUrl = image?.original || image?.medium || 'https://placehold.co/800x450?text=No+Image';
  const releaseDate = premiered || 'N/A';
  const displayRating = rating?.average ? `⭐ ${rating.average}` : '⭐ N/A';
  const genreList = genres && genres.length > 0 ? genres.join(', ') : 'N/A';

  const cleanSummary = summary
    ? summary.replace(/<[^>]+>/g, '')
    : 'No overview available.';

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-brandBg border border-brandGreen/20 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img
            src={backdropUrl}
            alt={name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-black text-brandText tracking-tight">
            {name}
          </h2>

          <div className="flex items-center gap-3 text-sm font-semibold text-brandSilver/70">
            <span>{displayRating}</span>
            <span className="text-brandGreen/40">•</span>
            <span>📅 {releaseDate}</span>
            <span className="text-brandGreen/40">•</span>
            <span>{genreList}</span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-brandText text-sm">Overview</h3>
            <p className="text-brandSilver/80 text-sm leading-relaxed">
              {cleanSummary}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-brandGreen hover:bg-brandGreen/80 text-brandText font-bold text-xs py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer mt-4"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}