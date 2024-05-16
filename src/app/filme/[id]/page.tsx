
import { Button } from "@/app/componets/button";
import { NavBar } from "@/app/componets/navbar";
import { ArrowLeft, Link, Play } from "lucide-react";

export default function Detalhe() {
  return (
    <main className="flex min-h-screen flex-col">

      <NavBar/>

      <section className="flex p-12 gap-9 bg-[url('https://image.tmdb.org/t/p/original/uhUO7vQQKvCTfQWubOt5MAKokbL.jpg')] ">
          <div className="#-[300px] rounded overflow-hidden">
              <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg"/>
          </div>

          <div>
            <img src="" alt="" />
          </div>

        <div className="flex flex-col gap-9 w-4/5">
          <h2 className="text-4xl font-bold ">Titulo do Filme</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa cumque atque asperiores
            dignissimos iusto at molestiae, perspiciatis perferendis, voluptatem similique sunt est maxime, nesciunt facilis
            veniam consequatur debitis veritatis!</p>
        </div>
      </section>

      <section className="flex gap-4 m-4">
        <Button label="Voltar" href="/" icon={<ArrowLeft />} />
        <Button label="Site" href="/" icon={<Link />} />
        <Button label="Trailer" href="/" icon={<Play />} />

      </section>

    </main>
  );
}
