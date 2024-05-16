import Link from "next/link";
import { NavBar } from "./componets/navbar";
import { Title } from "./componets/title";
import { Card } from "./componets/card";

export default function Home() {

  const filmes = [
  {
    id: 1,
    title: "Duna",
    poster_path: "https://image.tmdb.org/t/p/original/jDzRWCbsndnAhpB70L1jhjzw1NV.jpg",
    vote_average: 10
  },
  {
    id: 2,
    title: "Wicked",
    poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/npCpNp3nu2VQ8yI5W6MSYsImg0S.jpg",
    vote_average: 10
  },  
  {
    id: 3,
    title: "Divertidamente 2",
    poster_path: "https://image.tmdb.org/t/p/original/bZ7FzOQiMGVp8UXZn4c30amby7D.jpg",
    vote_average: 10
  },
  {
    id: 4,
    title: "Oppenheimer",
    poster_path: "https://image.tmdb.org/t/p/original/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg",
    vote_average: 10
  },
  {
    id: 5,
    title: "Interstellar",
    poster_path: "https://image.tmdb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
    vote_average: 10
  },
  {
    id: 6,
    title: "Soul",
    poster_path: "https://image.tmdb.org/t/p/original/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg",
    vote_average: 10
  },
  {
    id: 8,
    title: "Orgulho e Preconceito",
    poster_path: "https://image.tmdb.org/t/p/original/dmnY0Zs8uMSHkMiol7M3xOlvvkK.jpg",
    vote_average: 10
  }

]

  return (
    <main className="flex min-h-screen flex-col">
      
    <NavBar/>
    
    <Title>Filmes em Alta</Title>
    <section className="flex gap-4 m-4 flex-wrap">
     {filmes.map(filme => <Card filme={filme} />)}

    </section>

    <section>
      <Title>Séries em Alta</Title>
    </section>

    </main>
  );
}
