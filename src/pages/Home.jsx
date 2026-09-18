import Hero from '../components/Hero';

export default function Home({ onExplore }) {
  return (
    <div className="animate-fade-in py-4">
      <Hero onExplore={onExplore} />
    </div>
  );
}
