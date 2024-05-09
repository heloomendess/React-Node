import Link from "next/link";
import { NavBar } from "./componets/navbar";
import { Title } from "./componets/title";
import { Card } from "./componets/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
    <NavBar/>
    
    <Title>Filmes em Alta</Title>
    <section className="flex gap-4 m-4 flex-wrap">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </section>

    <section>
      <Title>Séries em Alta</Title>
    </section>

    </main>
  );
}
