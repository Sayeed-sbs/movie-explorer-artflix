export default function MovieCard({ show, onViewDetails }) {
  const { name, image, premiered, rating } = show;

  const fallbackImage = 'https://placehold.co/300x450?text=No+Image';

  const posterUrl = image?.medium || fallbackImage;
  const releaseYear = premiered ? premiered.split('-')[0] : 'N/A';
  const displayRating = rating?.average ? `⭐ ${rating.average}` : '⭐ N/A';

  return (
    <div className="bg-brandGreen/5 border border-brandGreen/10 rounded-2xl overflow-hidden flex flex-col hover:border-brandSilver/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-brandBg">
        <img
          src={posterUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-1.5">
          <h3 className="font-bold text-base text-brandText tracking-tight line-clamp-1 group-hover:text-brandSilver transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-xs font-semibold text-brandSilver/70">
            <span>{displayRating}</span>
            <span className="text-brandGreen/40">•</span>
            <span>📅 {releaseYear}</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(show)}
          className="w-full bg-brandGreen hover:bg-brandGreen/80 text-brandText font-bold text-xs py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}