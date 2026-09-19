# 🎬 ARTFLIX — Movie Explorer

A little movie/TV browsing app I built for my assignment. You can look through shows, search for something specific, and click into a card to see more details in a modal — basically a mini Netflix-style browser, minus the actual streaming part (TVMaze doesn't give us video, just the info).

#Live vercel demo: https://movie-explorer-artflix.vercel.app/
#Github Repository link: https://github.com/Sayeed-sbs/movie-explorer-artflix/

---

## What it does

- **Home page** with a hero section that pulls live posters from the API and cycles them in the background, plus a rotating spotlight poster on the side
- **Movies page** where you can search by title (debounced, so it's not spamming the API on every keystroke) or just browse everything if you leave the search bar empty
- **Details modal** that pops up when you hit "See Details" on a card — shows the poster, rating, release date, genres, and overview
- Fully responsive, so it doesn't fall apart on mobile (single column on small screens, grid on desktop)

## Built with

- React
- Tailwind CSS
- [TVMaze API](https://www.tvmaze.com/api) — free, no API key needed, which made this way less painful

## Running it locally

```bash
git clone <your-repo-url>
cd artflix
npm install
npm run dev
```

Then just open whatever localhost URL it gives you.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Footer.jsx
    MovieCard.jsx
    MovieModal.jsx
  pages/
    Home.jsx
    Movies.jsx
  App.jsx
```

## Notes / things I'd improve if I had more time

- TVMaze's `/shows` endpoint isn't sorted by popularity, so the homepage poster wall is kind of random — a curated list of well-known shows would look better
- No pagination on the movies page yet, it just grabs a batch and stops
- Could add a loading skeleton instead of the plain spinner

## Credits

All show data and posters come from [TVMaze](https://www.tvmaze.com/api). Built as part of a coursework assignment.